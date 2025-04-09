import os
import pandas as pd
from telethon import TelegramClient, events, types, functions
from telethon.tl.functions.messages import GetDialogsRequest
from telethon.tl.types import InputPeerEmpty
from telethon.tl.functions.channels import CreateChannelRequest, EditBannedRequest, EditAdminRequest, DeleteChannelRequest
from telethon.tl.types import ChatBannedRights, ChatAdminRights
import asyncio
import logging
import requests
import time
import json
import re
from telethon.errors import FloodWaitError

# Configuração de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('telegram_groups.log'),
        logging.StreamHandler()
    ]
)

# Credenciais da API do Telegram
API_ID = "17573482"
API_HASH = "05a044c25727b60547cf062a24b39bb9"
PHONE_NUMBER = "+5546984093769"
IBGE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes"

# Nome do arquivo Excel
EXCEL_FILE = 'grupos_telegram.xlsx'

# Define o caminho do data.js
DATA_JS_FILE = os.path.join('js', 'data.js')

logger = logging.getLogger(__name__)

# Verifica se o arquivo existe
if not os.path.exists(DATA_JS_FILE):
    logging.error(f"Arquivo data.js não encontrado em: {DATA_JS_FILE}")
    logging.error(f"Diretório atual: {os.getcwd()}")
    raise FileNotFoundError(f"Arquivo data.js não encontrado em: {DATA_JS_FILE}")

logger.info(f"Arquivo data.js encontrado em: {DATA_JS_FILE}")

# Configurações de retry
MAX_RETRIES = 3
DELAY_BETWEEN_GROUPS = 10  # segundos
DELAY_BETWEEN_RETRIES = 300  # segundos

def carregar_grupos_existentes():
    """Carrega os grupos existentes do data.js"""
    try:
        with open(DATA_JS_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extrai o array de grupos
        grupos_match = re.search(r'const\s+gruposData\s*=\s*(\[.*?\]);', content, re.DOTALL)
        if not grupos_match:
            return []
            
        grupos_str = grupos_match.group(1)
        # Converte o formato JavaScript em JSON
        grupos_str = re.sub(r'(\w+):', r'"\1":', grupos_str)
        grupos_str = re.sub(r',(\s*[}\]])', r'\1', grupos_str)
        grupos_str = re.sub(r'""https"://', r'"https://', grupos_str)
        
        grupos = json.loads(grupos_str)
        logger.info(f"Carregados {len(grupos)} grupos existentes do data.js")
        return grupos
    except Exception as e:
        logger.error(f"Erro ao carregar grupos existentes: {str(e)}")
        return []

def atualizar_data_js(grupos):
    """Atualiza o arquivo data.js com os novos grupos"""
    try:
        # Lê o conteúdo atual do arquivo
        with open(DATA_JS_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extrai o array de grupos
        grupos_match = re.search(r'const\s+gruposData\s*=\s*(\[.*?\]);', content, re.DOTALL)
        if not grupos_match:
            return False
            
        # Converte os grupos para string JavaScript
        grupos_js = json.dumps(grupos, indent=2, ensure_ascii=False)
        
        # Substitui o array de grupos
        new_content = re.sub(
            r'const\s+gruposData\s*=\s*\[.*?\];',
            f'const gruposData = {grupos_js};',
            content,
            flags=re.DOTALL
        )
        
        # Salva o arquivo
        with open(DATA_JS_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        return True
    except Exception as e:
        logger.error(f"Erro ao atualizar data.js: {str(e)}")
        return False

async def obter_microregioes():
    """Obtém as microregiões do IBGE."""
    try:
        response = requests.get(IBGE_URL)
        if response.status_code == 200:
            dados = response.json()
            estados = {}
            for item in dados:
                estado = item["mesorregiao"]["UF"]["sigla"]
                microregiao = item["nome"]
                if estado not in estados:
                    estados[estado] = []
                estados[estado].append(microregiao)
            logger.info(f"Carregadas {len(dados)} microregiões do IBGE")
            return estados
        else:
            logger.error("Erro ao buscar microregiões do IBGE.")
            return {}
    except Exception as e:
        logger.error(f"Erro ao obter microregiões: {str(e)}")
        return {}

async def obter_grupos_existentes(client):
    """Obtém a lista de grupos existentes."""
    try:
        dialogs = await client.get_dialogs()
        grupos = {dialog.title: dialog.entity for dialog in dialogs if isinstance(dialog.entity, types.Channel)}
        logger.info(f"Encontrados {len(grupos)} grupos no Telegram")
        return grupos
    except Exception as e:
        logger.error(f"Erro ao obter grupos existentes: {str(e)}")
        return {}

async def configurar_permissoes_grupo(client, channel):
    """Configura as permissões do grupo."""
    try:
        # Configura permissões de visualização
        await client(EditBannedRequest(
            channel=channel,
            participant='@everyone',
            banned_rights=ChatBannedRights(
                until_date=None,
                view_messages=True,
                send_messages=False,
                send_media=False,
                send_stickers=False,
                send_gifs=False,
                send_games=False,
                send_inline=False,
                embed_links=False
            )
        ))
        
        # Configura aprovação de novos participantes
        await client(EditAdminRequest(
            channel=channel,
            user_id=await client.get_peer_id('me'),
            admin_rights=ChatAdminRights(
                post_messages=True,
                edit_messages=True,
                delete_messages=True,
                ban_users=True,
                invite_users=True,
                pin_messages=True,
                add_admins=True,
                anonymous=True,
                manage_call=True,
                other=True,
                manage_topics=True
            ),
            rank='Administrador'
        ))
        
        logger.info('Permissões do grupo configuradas com sucesso')
        return True
    except Exception as e:
        logger.error(f'Erro ao configurar permissões: {str(e)}')
        return False

async def criar_grupo_telegram(client, estado, microregiao, retry_count=0):
    """Cria um grupo no Telegram para uma microregião com sistema de retry."""
    try:
        nome_grupo = f"Plantões Médicos {microregiao} - {estado}"
        
        # Cria novo grupo
        result = await client(CreateChannelRequest(
            title=nome_grupo,
            about=f'Grupo para discussão de plantões médicos na microregião {microregiao} - {estado}',
            megagroup=True
        ))
        
        channel = result.chats[0]
        
        # Configura as permissões do novo grupo
        if await configurar_permissoes_grupo(client, channel):
            # Gera o link de convite
            invite = await client(functions.messages.ExportChatInviteRequest(
                peer=channel,
                legacy_revoke_permanent=True
            ))
            return invite.link
        
        return None
        
    except FloodWaitError as e:
        wait_time = e.seconds
        logger.warning(f'Limite de requisições atingido. Aguardando {wait_time} segundos...')
        
        # Se o tempo de espera for maior que 1 hora, salva o progresso e encerra
        if wait_time > 3600:
            logger.info(f'Tempo de espera muito longo ({wait_time} segundos). Salvando progresso e encerrando...')
            return None
            
        if retry_count < MAX_RETRIES:
            logger.info(f'Tentativa {retry_count + 1} de {MAX_RETRIES}')
            await asyncio.sleep(DELAY_BETWEEN_RETRIES)
            return await criar_grupo_telegram(client, estado, microregiao, retry_count + 1)
        else:
            logger.error(f'Número máximo de tentativas atingido para {microregiao} - {estado}')
            return None
            
    except Exception as e:
        logger.error(f'Erro ao criar grupo para {microregiao} - {estado}: {str(e)}')
        return None

def atualizar_excel(estado, microregiao, link):
    """Atualiza o arquivo Excel com o link do grupo."""
    try:
        if os.path.exists(EXCEL_FILE):
            df = pd.read_excel(EXCEL_FILE)
        else:
            df = pd.DataFrame(columns=['Estado', 'Microregião', 'Link do Grupo', 'Status'])
        
        # Atualiza ou adiciona a linha
        mask = (df['Estado'] == estado) & (df['Microregião'] == microregiao)
        if mask.any():
            df.loc[mask, 'Link do Grupo'] = link
            df.loc[mask, 'Status'] = 'Ativo'
        else:
            df = df.append({
                'Estado': estado,
                'Microregião': microregiao,
                'Link do Grupo': link,
                'Status': 'Ativo'
            }, ignore_index=True)
        
        df.to_excel(EXCEL_FILE, index=False)
        logger.info(f'Arquivo Excel atualizado para {microregiao} - {estado}')
        
    except Exception as e:
        logger.error(f'Erro ao atualizar Excel: {str(e)}')

async def deletar_grupo_duplicado(client, channel):
    """Deleta um grupo duplicado."""
    try:
        await client(DeleteChannelRequest(channel))
        logger.info(f"Grupo duplicado deletado com sucesso: {channel.title}")
        return True
    except Exception as e:
        logger.error(f"Erro ao deletar grupo duplicado: {str(e)}")
        return False

async def obter_link_grupo(client, channel):
    """Obtém o link de convite de um grupo existente."""
    try:
        invite = await client(functions.messages.ExportChatInviteRequest(
            peer=channel,
            legacy_revoke_permanent=True
        ))
        return invite.link
    except Exception as e:
        logger.error(f"Erro ao obter link do grupo {channel.title}: {str(e)}")
        return None

async def sincronizar_grupos_existentes(client):
    """Sincroniza os grupos existentes no Telegram com o data.js."""
    try:
        # Carrega grupos do data.js
        grupos_data_js = carregar_grupos_existentes()
        
        # Obtém grupos do Telegram
        dialogs = await client.get_dialogs()
        grupos_telegram = {dialog.title: dialog.entity for dialog in dialogs if isinstance(dialog.entity, types.Channel)}
        
        # Lista para armazenar grupos válidos
        grupos_validos = []
        
        # Processa grupos do data.js
        for grupo in grupos_data_js:
            nome_grupo = f"Plantões Médicos {grupo['microregiao']} - {grupo['estado']}"
            
            # Se o grupo existe no Telegram, obtém o link atualizado
            if nome_grupo in grupos_telegram:
                link = await obter_link_grupo(client, grupos_telegram[nome_grupo])
                if link:
                    grupos_validos.append({
                        'microregiao': grupo['microregiao'],
                        'estado': grupo['estado'],
                        'link': link,
                        'status': 'Ativo'
                    })
            # Se o grupo não existe no Telegram e está marcado como em-breve, mantém assim
            elif grupo['link'] == 'em-breve.html':
                grupos_validos.append(grupo)
        
        return grupos_validos
        
    except Exception as e:
        logger.error(f"Erro ao sincronizar grupos: {str(e)}")
        return []

async def verificar_e_obter_grupo(client, microregiao, estado):
    """Verifica se o grupo existe e retorna o grupo se encontrado."""
    try:
        nome_grupo = f"Plantões Médicos {microregiao} - {estado}"
        dialogs = await client.get_dialogs()
        for dialog in dialogs:
            if isinstance(dialog.entity, types.Channel) and dialog.title == nome_grupo:
                return dialog.entity
        return None
    except Exception as e:
        logger.error(f"Erro ao verificar existência do grupo: {str(e)}")
        return None

async def gerar_novo_link_grupo(client, channel):
    """Gera um novo link de convite para um grupo existente."""
    try:
        invite = await client(functions.messages.ExportChatInviteRequest(
            peer=channel,
            legacy_revoke_permanent=True
        ))
        return invite.link
    except Exception as e:
        logger.error(f"Erro ao gerar novo link para o grupo: {str(e)}")
        return None

async def verificar_link_grupo(client, link, microregiao, estado):
    """Verifica se o link do grupo é válido e leva ao grupo correto."""
    try:
        # Primeiro verifica se o link tem o formato correto
        if not link.startswith('https://t.me/+'):
            logger.warning(f"Formato de link inválido: {link}")
            return False, None
            
        try:
            # Tenta entrar no grupo usando o link para verificar se é válido
            result = await client(functions.messages.ImportChatInviteRequest(
                hash=link.split('+')[1]
            ))
            
            # Verifica se o grupo obtido pelo link é o grupo correto
            nome_grupo_esperado = f"Plantões Médicos {microregiao} - {estado}"
            if hasattr(result, 'chats') and result.chats:
                grupo_encontrado = result.chats[0]
                if grupo_encontrado.title == nome_grupo_esperado:
                    logger.info(f"Link válido e corresponde ao grupo correto: {microregiao} - {estado}")
                    return True, link
                else:
                    logger.warning(f"Link válido mas leva a um grupo diferente. Esperado: {nome_grupo_esperado}, Encontrado: {grupo_encontrado.title}")
                    return False, None
            
            return False, None
            
        except Exception as e:
            if "INVITE_HASH_EXPIRED" in str(e) or "INVITE_HASH_INVALID" in str(e):
                logger.warning(f"Link expirado ou inválido: {link}")
                
                # Verifica se o grupo ainda existe
                grupo_existente = await verificar_e_obter_grupo(client, microregiao, estado)
                if grupo_existente:
                    logger.info(f"Grupo encontrado para {microregiao} - {estado}, gerando novo link...")
                    novo_link = await gerar_novo_link_grupo(client, grupo_existente)
                    if novo_link:
                        logger.info(f"Novo link gerado com sucesso para {microregiao} - {estado}")
                        return True, novo_link
            
            return False, None
            
    except Exception as e:
        logger.error(f"Erro ao verificar link do grupo: {str(e)}")
        return False, None

async def remover_grupos_duplicados(client, grupos_data_js):
    """Remove grupos duplicados que não têm referência no data.js."""
    try:
        # Obtém todos os grupos do Telegram
        dialogs = await client.get_dialogs()
        grupos_telegram = [d for d in dialogs if isinstance(d.entity, types.Channel)]
        
        # Cria um dicionário com os grupos válidos do data.js
        grupos_validos = {f"Plantões Médicos {g['microregiao']} - {g['estado']}": g['link'] 
                         for g in grupos_data_js}
        
        # Verifica cada grupo do Telegram
        for dialog in grupos_telegram:
            nome_grupo = dialog.title
            if nome_grupo.startswith("Plantões Médicos "):
                # Se o grupo não está no data.js ou tem um link diferente
                if nome_grupo not in grupos_validos:
                    logger.info(f"Removendo grupo duplicado: {nome_grupo}")
                    await deletar_grupo_duplicado(client, dialog.entity)
                else:
                    # Verifica se o link do grupo corresponde ao link no data.js
                    link_atual = await obter_link_grupo(client, dialog.entity)
                    if link_atual and link_atual != grupos_validos[nome_grupo]:
                        # Se o link é diferente e este não é o grupo referenciado no data.js
                        link_valido, _ = await verificar_link_grupo(client, grupos_validos[nome_grupo], 
                                                                  nome_grupo.split(" - ")[0].replace("Plantões Médicos ", ""),
                                                                  nome_grupo.split(" - ")[1])
                        if not link_valido:
                            logger.info(f"Removendo grupo com link diferente: {nome_grupo}")
                            await deletar_grupo_duplicado(client, dialog.entity)
        
        logger.info("Verificação de grupos duplicados concluída")
        
    except Exception as e:
        logger.error(f"Erro ao remover grupos duplicados: {str(e)}")

async def main():
    """Função principal que sincroniza grupos existentes e cria novos."""
    try:
        # Inicializa o cliente
        client = TelegramClient('session_name', API_ID, API_HASH)
        await client.start(PHONE_NUMBER)
        
        # Carrega todos os grupos do data.js
        grupos_data_js = carregar_grupos_existentes()
        
        # Remove grupos duplicados antes de começar
        logger.info("Verificando e removendo grupos duplicados...")
        await remover_grupos_duplicados(client, grupos_data_js)
        
        # Listas para armazenar grupos
        grupos_para_criar = []
        grupos_atualizados = []
        
        # Verifica grupos existentes e identifica quais precisam ser recriados
        for grupo in grupos_data_js:
            if grupo['link'] == 'em-breve.html':
                # Verifica se o grupo já existe antes de marcar para criação
                grupo_existente = await verificar_e_obter_grupo(client, grupo['microregiao'], grupo['estado'])
                if grupo_existente:
                    logger.info(f"Grupo encontrado para {grupo['microregiao']} - {grupo['estado']}, gerando link...")
                    novo_link = await gerar_novo_link_grupo(client, grupo_existente)
                    if novo_link:
                        grupos_atualizados.append({
                            'microregiao': grupo['microregiao'],
                            'estado': grupo['estado'],
                            'link': novo_link,
                            'status': 'Ativo'
                        })
                        continue
                
                grupos_para_criar.append(grupo)
                grupos_atualizados.append(grupo)  # Mantém como em-breve por enquanto
            else:
                # Verifica se o link ainda é válido e leva ao grupo correto
                link_valido, novo_link = await verificar_link_grupo(client, grupo['link'], grupo['microregiao'], grupo['estado'])
                if link_valido:
                    logger.info(f"Link válido para: {grupo['microregiao']} - {grupo['estado']}")
                    grupos_atualizados.append({
                        'microregiao': grupo['microregiao'],
                        'estado': grupo['estado'],
                        'link': novo_link if novo_link else grupo['link'],
                        'status': 'Ativo'
                    })
                else:
                    logger.info(f"Grupo será recriado pois o link está inválido ou incorreto: {grupo['microregiao']} - {grupo['estado']}")
                    grupos_para_criar.append(grupo)
                    grupos_atualizados.append({
                        'microregiao': grupo['microregiao'],
                        'estado': grupo['estado'],
                        'link': 'em-breve.html',
                        'status': 'Em Breve'
                    })
        
        logger.info(f"Encontrados {len(grupos_para_criar)} grupos para criar/recriar")
        logger.info(f"Total de grupos com links válidos: {len([g for g in grupos_atualizados if g['link'] != 'em-breve.html'])}")
        
        # Pergunta se deseja continuar com a criação de novos grupos
        logger.info("Pressione Enter para continuar com a criação de novos grupos ou Ctrl+C para sair.")
        try:
            input()
        except KeyboardInterrupt:
            logger.info("Operação cancelada pelo usuário")
            await client.disconnect()
            return
        
        # Cria/recria os grupos necessários
        for grupo in grupos_para_criar:
            chave = f"{grupo['microregiao']} - {grupo['estado']}"
            
            logger.info(f'Criando/recriando grupo para {chave}...')
            try:
                invite_link = await criar_grupo_telegram(client, grupo['estado'], grupo['microregiao'])
                
                if invite_link:
                    logger.info(f'Link de convite para {chave}: {invite_link}')
                    # Atualiza o link no array de grupos
                    for g in grupos_atualizados:
                        if g['microregiao'] == grupo['microregiao'] and g['estado'] == grupo['estado']:
                            g['link'] = invite_link
                            g['status'] = 'Ativo'
                            break
                    
                    # Atualiza o data.js após cada grupo criado com sucesso
                    if atualizar_data_js(grupos_atualizados):
                        logger.info('data.js atualizado com sucesso')
                    else:
                        logger.error('Erro ao atualizar data.js')
                
                # Aguarda um tempo entre a criação de cada grupo
                logger.info(f'Aguardando {DELAY_BETWEEN_GROUPS} segundos antes do próximo grupo...')
                await asyncio.sleep(DELAY_BETWEEN_GROUPS)
                
            except FloodWaitError as e:
                wait_time = e.seconds
                logger.warning(f'Limite de requisições atingido. Aguardando {wait_time} segundos...')
                logger.info('Encerrando criação de novos grupos devido ao limite atingido.')
                
                # Atualiza o data.js com o estado atual antes de encerrar
                if atualizar_data_js(grupos_atualizados):
                    logger.info('data.js atualizado com sucesso antes de encerrar')
                    logger.info(f'Total de grupos ativos: {len([g for g in grupos_atualizados if g["status"] == "Ativo"])}')
                    logger.info(f'Total de grupos em breve: {len([g for g in grupos_atualizados if g["status"] == "Em Breve"])}')
                else:
                    logger.error('Erro ao atualizar data.js')
                
                await client.disconnect()
                return
        
        await client.disconnect()
        
    except Exception as e:
        logger.error(f'Erro na execução principal: {str(e)}')

async def atualizar_todas_microregioes():
    """Atualiza o data.js com todas as microregiões, incluindo as que ainda não têm grupo."""
    try:
        # Obtém todas as microregiões do IBGE
        response = requests.get(IBGE_URL)
        if response.status_code != 200:
            logger.error("Erro ao buscar microregiões do IBGE")
            return
            
        dados = response.json()
        logger.info(f"Total de microregiões encontradas no IBGE: {len(dados)}")
        
        # Carrega grupos existentes do data.js
        grupos_existentes = carregar_grupos_existentes()
        grupos_existentes_dict = {f"{g['microregiao']} - {g['estado']}": g for g in grupos_existentes}
        
        # Lista para armazenar todos os grupos
        todos_grupos = []
        
        # Processa cada microregião
        for item in dados:
            estado = item["mesorregiao"]["UF"]["sigla"]
            microregiao = item["nome"]
            chave = f"{microregiao} - {estado}"
            
            # Se já existe um grupo ativo, mantém ele
            if chave in grupos_existentes_dict:
                todos_grupos.append(grupos_existentes_dict[chave])
            else:
                # Se não existe, adiciona com link para em-breve.html
                todos_grupos.append({
                    'microregiao': microregiao,
                    'estado': estado,
                    'link': 'em-breve.html',
                    'status': 'Em Breve'
                })
        
        # Atualiza o data.js com todos os grupos
        if atualizar_data_js(todos_grupos):
            logger.info(f"data.js atualizado com {len(todos_grupos)} microregiões")
            logger.info(f"Grupos ativos: {len([g for g in todos_grupos if g['status'] == 'Ativo'])}")
            logger.info(f"Grupos em breve: {len([g for g in todos_grupos if g['status'] == 'Em Breve'])}")
        else:
            logger.error("Erro ao atualizar data.js")
            
    except Exception as e:
        logger.error(f"Erro ao atualizar microregiões: {str(e)}")

if __name__ == '__main__':
    asyncio.run(main()) 
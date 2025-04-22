import os
import threading
from queue import Queue, Empty
import json
from datetime import datetime

# Template base da página
PAGE_TEMPLATE = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantão Médico {city} {state} | Vagas e Oportunidades para Médicos</title>
    <meta name="description" content="Encontre plantões médicos em {city}-{state}. Vagas urgentes, escalas mensais e oportunidades para médicos. Conecte-se diretamente com hospitais e clínicas da região através de grupos no Telegram e WhatsApp.">
    <meta name="keywords" content="plantão médico {city}, vaga médico {city}, escala médica {city} {state}, trabalho médico {city}, oportunidades médicas {state_name}, plantões hospital {city}, whatsapp médico {city}, telegram médico {city}">
    <meta name="author" content="Grupo de Plantões Médicos Brasil">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://plantoesmedicosbrasil.com.br/{slug}">
    
    <!-- Google AdSense -->
    <meta name="google-adsense-account" content="ca-pub-6042215656970545">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6042215656970545"
     crossorigin="anonymous"></script>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://plantoesmedicosbrasil.com.br/{slug}">
    <meta property="og:title" content="Plantão Médico {city} {state} | Vagas e Oportunidades">
    <meta property="og:description" content="Encontre plantões médicos em {city}-{state}. Vagas urgentes e oportunidades para médicos. Conecte-se com hospitais e clínicas da região via Telegram e WhatsApp.">
    <meta property="og:image" content="https://plantoesmedicosbrasil.com.br/images/{slug}.jpg">

    <!-- Schema.org markup for Google -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Plantões Médicos em {city}-{state}",
      "description": "Oportunidades de plantões médicos em {city}. Conecte-se com hospitais e clínicas da região através de grupos no Telegram e WhatsApp.",
      "identifier": {{
        "@type": "PropertyValue",
        "name": "Grupo de Plantões Médicos Brasil",
        "value": "GPMB-{code}"
      }},
      "datePosted": "{date_posted}",
      "validThrough": "{valid_through}",
      "hiringOrganization": {{
        "@type": "Organization",
        "name": "Grupo de Plantões Médicos Brasil",
        "sameAs": "https://plantoesmedicosbrasil.com.br",
        "logo": "https://plantoesmedicosbrasil.com.br/images/logo.png"
      }},
      "jobLocation": {{
        "@type": "Place",
        "address": {{
          "@type": "PostalAddress",
          "addressLocality": "{city}",
          "addressRegion": "{state}",
          "addressCountry": "BR",
          "streetAddress": "Diversas unidades de saúde em {city}",
          "postalCode": "{postal_code}"
        }}
      }},
      "baseSalary": {{
        "@type": "MonetaryAmount",
        "currency": "BRL",
        "value": {{
          "@type": "QuantitativeValue",
          "value": "1000",
          "unitText": "DAY",
          "minValue": "700",
          "maxValue": "2000"
        }}
      }},
      "employmentType": ["FULL_TIME", "PART_TIME", "TEMPORARY"],
      "workHours": "Plantões de 6, 12 e 24 horas",
      "occupationalCategory": "Medical Doctors",
      "jobBenefits": "Flexibilidade de horários, pagamento por plantão, oportunidades em diversas unidades de saúde",
      "applicantLocationRequirements": {{
        "@type": "AdministrativeArea",
        "name": "{city}, {state_name}"
      }},
      "jobLocationType": "TELECOMMUTE_AND_WORK_AT_PREMISES"
    }}
    </script>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="images/favicon.png">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/local-pages.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Analytics -->
    <script src="js/analytics.js"></script>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="logo">
                <h1><i class="fas fa-hospital-user"></i> Plantões Médicos Brasil</h1>
            </div>
            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
            <div class="nav-links">
                <a href="/"><i class="fas fa-home"></i> Página Inicial</a>
                <a href="#informacoes"><i class="fas fa-info-circle"></i> Informações</a>
                <a href="#vantagens"><i class="fas fa-star"></i> Vantagens</a>
                <a href="#empresas"><i class="fas fa-building-hospital"></i> Para Empresas</a>
                <a href="#grupos-regionais"><i class="fas fa-users"></i> Grupos Regionais</a>
                <a href="#compartilhar"><i class="fas fa-share-alt"></i> Compartilhar</a>
            </div>
        </nav>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero-local">
            <div class="hero-content">
                <h1>Plantões Médicos em {city}-{state}</h1>
                <p>Encontre as melhores oportunidades de plantão médico em {city} e região</p>
                <div class="cta-buttons" style="display: flex; flex-direction: column; gap: 15px; width: 100%; max-width: 300px; margin: 0 auto;">
                    <a href="{telegram_link}" class="btn-primary" style="width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;">
                        Entrar no Grupo do Telegram <i class="fab fa-telegram" style="margin-left: 10px;"></i>
                    </a>
                    {whatsapp_button}
                </div>
            </div>
        </section>

        <!-- Local Info Section -->
        <section id="informacoes" class="local-info">
            <div class="container">
                <h2>Informações sobre Plantões em {city}</h2>
                <div class="info-grid">
                    <div class="info-card">
                        <i class="fas fa-hospital"></i>
                        <h3>Hospitais e Clínicas</h3>
                        <p>Conecte-se com as principais instituições de saúde da região</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-clock"></i>
                        <h3>Plantões Flexíveis</h3>
                        <p>Encontre plantões que se adequam à sua rotina</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-handshake"></i>
                        <h3>Rede de Contatos</h3>
                        <p>Faça parte de uma rede profissional qualificada</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Vantagens Section -->
        <section id="vantagens" class="vantagens">
            <div class="container">
                <h2>Vantagens de Participar do Grupo</h2>
                <div class="vantagens-grid">
                    <div class="vantagem-item">
                        <i class="fas fa-bolt"></i>
                        <h3>Acesso Rápido</h3>
                        <p>Receba notificações de plantões em tempo real</p>
                    </div>
                    <div class="vantagem-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>Localização</h3>
                        <p>Plantões próximos à sua região</p>
                    </div>
                    <div class="vantagem-item">
                        <i class="fas fa-comments"></i>
                        <h3>Comunidade</h3>
                        <p>Interaja com outros profissionais da área</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section id="grupos-regionais" class="cta-section">
            <div class="container">
                <h2>Junte-se aos Grupos de {city}</h2>
                <p>Conecte-se com as melhores oportunidades de plantão médico em {city} e região</p>
                <div style="display: flex; flex-direction: column; gap: 15px; align-items: center; max-width: 300px; margin: 0 auto;">
                    <a href="{telegram_link}" class="btn-telegram" style="width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;">
                        <i class="fab fa-telegram" style="margin-right: 10px;"></i> Entrar no Grupo do Telegram
                    </a>
                    {whatsapp_cta}
                </div>
            </div>
        </section>

        <!-- Empresas Section -->
        <section id="empresas" class="empresas">
            <div class="container">
                <h2>Para Empresas e Organizações de Saúde</h2>
                <p class="section-description">Descubra como divulgar suas vagas e encontrar profissionais qualificados</p>
                <div class="empresas-grid">
                    <div class="empresa-card">
                        <i class="fas fa-bullhorn"></i>
                        <h3>Divulgue Vagas</h3>
                        <p>Alcance milhares de médicos qualificados em busca de plantões</p>
                        <ul>
                            <li><i class="fas fa-check"></i> Acesso direto a profissionais</li>
                            <li><i class="fas fa-check"></i> Divulgação rápida e eficiente</li>
                            <li><i class="fas fa-check"></i> Formato padronizado de vagas</li>
                        </ul>
                    </div>
                    <div class="empresa-card">
                        <i class="fas fa-users-cog"></i>
                        <h3>Gestão de Plantões</h3>
                        <p>Facilite o processo de contratação de médicos para sua instituição</p>
                        <ul>
                            <li><i class="fas fa-check"></i> Acesso a profissionais qualificados</li>
                            <li><i class="fas fa-check"></i> Processo seletivo simplificado</li>
                            <li><i class="fas fa-check"></i> Comunicação direta e eficiente</li>
                        </ul>
                    </div>
                    <div class="empresa-card">
                        <i class="fas fa-chart-line"></i>
                        <h3>Benefícios</h3>
                        <p>Vantagens exclusivas para empresas parceiras</p>
                        <ul>
                            <li><i class="fas fa-check"></i> Custos reduzidos</li>
                            <li><i class="fas fa-check"></i> Tempo de contratação otimizado</li>
                            <li><i class="fas fa-check"></i> Rede de contatos qualificada</li>
                        </ul>
                    </div>
                </div>
                <div class="cta-empresas" style="display: flex; flex-direction: column; gap: 15px; align-items: center; max-width: 300px; margin: 0 auto;">
                    <a href="{telegram_link}" class="btn-empresas" style="width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;">
                        <i class="fab fa-telegram" style="margin-right: 10px;"></i> Participar do Grupo do Telegram
                    </a>
                    {whatsapp_empresas}
                </div>
            </div>
        </section>

        <!-- Compartilhar Section -->
        <section id="compartilhar" class="compartilhar">
            <div class="container">
                <h2>Compartilhe esta Oportunidade</h2>
                <p>Ajude outros médicos a encontrarem plantões em {city}</p>
                <div class="share-buttons">
                    <a href="https://wa.me/?text=Encontre%20Plant%C3%B5es%20M%C3%A9dicos%20em%20{city}-{state}!%20Acesse%20https://plantoesmedicosbrasil.com.br/{slug}" target="_blank" class="share-button share-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="https://t.me/share/url?url=https://plantoesmedicosbrasil.com.br/{slug}&text=Encontre%20Plant%C3%B5es%20M%C3%A9dicos%20em%20{city}-{state}!" target="_blank" class="share-button share-telegram">
                        <i class="fab fa-telegram"></i> Telegram
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://plantoesmedicosbrasil.com.br/{slug}" target="_blank" class="share-button share-facebook">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=https://plantoesmedicosbrasil.com.br/{slug}&text=Encontre%20Plant%C3%B5es%20M%C3%A9dicos%20em%20{city}-{state}!" target="_blank" class="share-button share-twitter">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://plantoesmedicosbrasil.com.br/{slug}&title=Plant%C3%B5es%20M%C3%A9dicos%20em%20{city}-{state}&summary=Encontre%20Plant%C3%B5es%20M%C3%A9dicos%20em%20{city}-{state}!" target="_blank" class="share-button share-linkedin">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Grupo de Plantões Médicos Brasil</h3>
                    <p>Conectando médicos e empresas em todo o Brasil</p>
                </div>
                <div class="footer-section">
                    <h3>Links Rápidos</h3>
                    <a href="/"><i class="fas fa-home"></i> Página Inicial</a>
                    <a href="#informacoes"><i class="fas fa-info-circle"></i> Informações</a>
                    <a href="#vantagens"><i class="fas fa-star"></i> Vantagens</a>
                    <a href="#empresas"><i class="fas fa-building-hospital"></i> Para Empresas</a>
                    <a href="#grupos-regionais"><i class="fas fa-users"></i> Grupos Regionais</a>
                    <a href="#compartilhar"><i class="fas fa-share-alt"></i> Compartilhar</a>
                </div>
                <div class="footer-section">
                    <h3>Contato</h3>
                    <p><i class="fas fa-envelope"></i> Email: contato@plantoesmedicosbrasil.com.br</p>
                    <div class="social-links">
                        <a href="{telegram_link}" target="_blank"><i class="fab fa-telegram"></i></a>
                        <a href="https://instagram.com/plantoesmedicosbrasil" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com/company/plantoesmedicosbrasil" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://wa.me/5511999999999" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Grupo de Plantões Médicos Brasil. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/data.js"></script>
    <script src="js/local.js"></script>
</body>
</html>'''

def create_slug(city, state):
    """Cria um slug para o nome do arquivo"""
    # Remove caracteres especiais e acentos
    slug = city.lower()
    slug = slug.replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u')
    slug = slug.replace('ã', 'a').replace('õ', 'o').replace('â', 'a').replace('ê', 'e').replace('î', 'i')
    slug = slug.replace('ô', 'o').replace('û', 'u')
    slug = slug.replace(' ', '-')
    
    # Remove caracteres especiais
    slug = ''.join(c for c in slug if c.isalnum() or c == '-')
    
    # Remove hífens múltiplos
    while '--' in slug:
        slug = slug.replace('--', '-')
    
    # Remove hífens no início e fim
    slug = slug.strip('-')
    
    return f"{slug}-{state.lower()}"

def create_code(city):
    """Cria um código único para a cidade"""
    return city[:3].upper()

def page_exists(slug):
    """Verifica se a página já existe"""
    filename = f"{slug}.html"
    return os.path.exists(filename)

def load_cities_from_data_js():
    """Carrega as cidades do arquivo data.js"""
    try:
        # Usa o diretório atual do projeto
        data_js_path = os.path.join('js', 'data.js')
        
        print(f"Tentando carregar data.js de: {data_js_path}")
        print(f"Diretório atual: {os.getcwd()}")
        
        # Verifica se o arquivo existe
        if not os.path.exists(data_js_path):
            print(f"Arquivo não encontrado: {data_js_path}")
            return []
            
        # Verifica o tamanho do arquivo
        file_size = os.path.getsize(data_js_path)
        print(f"Tamanho do arquivo: {file_size} bytes")
        
        with open(data_js_path, 'r', encoding='utf-8') as f:
            content = f.read()
            print(f"Primeiros 100 caracteres do arquivo: {content[:100]}")
            
            # Remove os comentários e a declaração da variável
            json_str = content.replace('// Dados dos grupos de plantões médicos', '').strip()
            json_str = json_str.replace('const gruposData = ', '').strip()
            # Remove o ponto e vírgula do final
            json_str = json_str.rstrip(';')
            
            # Limpa o JSON
            json_str = json_str.replace('\n', ' ').replace('\r', '')
            json_str = ' '.join(json_str.split())  # Remove espaços extras
            
            # Remove possíveis caracteres invisíveis
            json_str = ''.join(char for char in json_str if char.isprintable())
            
            print(f"Primeiros 100 caracteres após limpeza: {json_str[:100]}")
            
            # Tenta encontrar o início e fim do array JSON
            start = json_str.find('[')
            end = json_str.rfind(']') + 1
            if start >= 0 and end > start:
                json_str = json_str[start:end]
            else:
                print("Não foi possível encontrar o array JSON válido")
                return []
            
            print(f"Primeiros 100 caracteres do array JSON: {json_str[:100]}")
            
            data = json.loads(json_str)
            
            cities = []
            for item in data:
                # Extrai cidade e estado do nome da microregião
                microregiao = item.get('microregiao', '')
                estado = item.get('estado', '')
                estado_nome = item.get('estado_nome', '')
                telegram_link = item.get('link', '')
                whatsapp_link = item.get('linkWhats', '')
                
                # Divide a microregião para obter a cidade
                cidade = microregiao.split('-')[0].strip() if '-' in microregiao else microregiao.strip()
                
                if not telegram_link or telegram_link == 'em-breve.html':
                    telegram_link = 'em-breve.html'

                if not whatsapp_link or whatsapp_link == 'em-breve.html':
                    whatsapp_link = 'em-breve.html'
                
                cities.append((
                    cidade,
                    estado,
                    estado_nome,
                    telegram_link,
                    whatsapp_link
                ))
            return cities
    except Exception as e:
        print(f"Erro ao carregar data.js: {e}")
        print(f"Diretório atual: {os.getcwd()}")
        print(f"Conteúdo do diretório js:")
        try:
            print(os.listdir('js'))
        except Exception as e:
            print(f"Erro ao listar diretório js: {e}")
        return []

def get_postal_code(state):
    """Retorna um CEP genérico para o estado"""
    postal_codes = {
        'AC': '69900-000',
        'AL': '57000-000',
        'AP': '68900-000',
        'AM': '69000-000',
        'BA': '40000-000',
        'CE': '60000-000',
        'DF': '70000-000',
        'ES': '29000-000',
        'GO': '74000-000',
        'MA': '65000-000',
        'MT': '78000-000',
        'MS': '79000-000',
        'MG': '30000-000',
        'PA': '66000-000',
        'PB': '58000-000',
        'PR': '80000-000',
        'PE': '50000-000',
        'PI': '64000-000',
        'RJ': '20000-000',
        'RN': '59000-000',
        'RS': '90000-000',
        'RO': '76800-000',
        'RR': '69300-000',
        'SC': '88000-000',
        'SP': '01000-000',
        'SE': '49000-000',
        'TO': '77000-000'
    }
    return postal_codes.get(state, '00000-000')

def generate_page(city, state, state_name, telegram_link, whatsapp_link, recreate_all=False):
    """Gera uma página HTML para uma cidade específica"""
    slug = create_slug(city, state)
    
    # Verifica se a página já existe, a menos que recriar todas as páginas
    if not recreate_all and page_exists(slug):
        print(f"Página já existe: {slug}.html")
        return
    
    code = create_code(city)
    
    # Configurações para Schema.org
    postal_code = get_postal_code(state)
    date_posted = datetime.now().strftime('%Y-%m-%dT00:00:00-03:00')
    valid_through = f"{datetime.now().year + 1}-12-31T23:59:59-03:00"
    
    # Prepara os botões de WhatsApp apenas se houver um link válido
    whatsapp_button = ""
    whatsapp_cta = ""
    whatsapp_empresas = ""
    
    if whatsapp_link and whatsapp_link != "em-breve.html":
        whatsapp_button = f'''<a href="{whatsapp_link}" class="btn-primary" style="background-color: #25D366; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;">
                        Entrar no Grupo do WhatsApp <i class="fab fa-whatsapp" style="margin-left: 10px;"></i>
                    </a>'''
        
        whatsapp_cta = f'''<a href="{whatsapp_link}" class="btn-telegram" style="background-color: #25D366; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;">
                        <i class="fab fa-whatsapp" style="margin-right: 10px;"></i> Entrar no Grupo do WhatsApp
                    </a>'''
        
        whatsapp_empresas = f'''<a href="{whatsapp_link}" class="btn-empresas" style="background-color: #25D366; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;">
                        <i class="fab fa-whatsapp" style="margin-right: 10px;"></i> Participar do Grupo do WhatsApp
                    </a>'''
    
    # Substitui as variáveis no template
    content = PAGE_TEMPLATE.format(
        city=city,
        state=state,
        state_name=state_name if state_name else "Brasil",
        slug=slug,
        code=code,
        telegram_link=telegram_link,
        whatsapp_button=whatsapp_button,
        whatsapp_cta=whatsapp_cta,
        whatsapp_empresas=whatsapp_empresas,
        postal_code=postal_code,
        date_posted=date_posted,
        valid_through=valid_through
    )
    
    # Cria o arquivo na raiz do projeto
    filename = f"{slug}.html"
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Página criada: {filename}")
    except Exception as e:
        print(f"Erro ao criar página {filename}: {str(e)}")

def worker(queue, recreate_all):
    """Função executada por cada thread"""
    while True:
        try:
            city, state, state_name, telegram_link, whatsapp_link = queue.get_nowait()
            generate_page(city, state, state_name, telegram_link, whatsapp_link, recreate_all)
        except Empty:
            break

def main():
    # Pergunta ao usuário se deseja recriar todas as páginas
    recreate_all = input("Deseja recriar todas as páginas? (s/n): ").strip().lower() == 's'

    # Carrega as cidades do data.js
    cities = load_cities_from_data_js()
    
    if not cities:
        print("Nenhuma cidade encontrada no data.js")
        return
        
    print(f"Carregadas {len(cities)} cidades do data.js")
    
    # Cria uma fila com todas as cidades
    queue = Queue()
    for city_data in cities:
        city, state, state_name, telegram_link, whatsapp_link = city_data
        slug = create_slug(city, state)
        if recreate_all or not page_exists(slug):
            queue.put(city_data)
    
    # Cria e inicia as threads
    threads = []
    num_threads = min(10, len(cities))  # Usa no máximo 10 threads
    
    for _ in range(num_threads):
        t = threading.Thread(target=worker, args=(queue, recreate_all))
        t.start()
        threads.append(t)
    
    # Aguarda todas as threads terminarem
    for t in threads:
        t.join()
    
    print("Processo de geração de páginas concluído!")

if __name__ == "__main__":
    main() 
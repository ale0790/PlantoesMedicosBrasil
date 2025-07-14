#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import os

def replace_telegram_links(file_path):
    """
    Substitui todos os links do Telegram por '#' no arquivo especificado.
    """
    # Verifica se o arquivo existe
    if not os.path.exists(file_path):
        print(f"Erro: O arquivo {file_path} não existe.")
        return False
    
    try:
        # Lê o conteúdo do arquivo
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Conta quantos links do Telegram existem no arquivo
        telegram_links = re.findall(r'"link":\s*"https://t\.me/[^"]*"', content)
        original_count = len(telegram_links)
        
        # Substitui os links do Telegram por '#'
        modified_content = re.sub(r'("link":\s*)"https://t\.me/[^"]*"', r'\1"#"', content)
        
        # Conta quantos links foram substituídos
        telegram_links_after = re.findall(r'"link":\s*"https://t\.me/[^"]*"', modified_content)
        replaced_count = original_count - len(telegram_links_after)
        
        # Cria uma cópia de backup do arquivo original
        backup_path = file_path + '.bak'
        with open(backup_path, 'w', encoding='utf-8') as backup_file:
            backup_file.write(content)
        
        # Escreve o conteúdo modificado no arquivo original
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        
        print(f"Operação concluída com sucesso!")
        print(f"Total de links do Telegram encontrados: {original_count}")
        print(f"Total de links substituídos: {replaced_count}")
        print(f"Backup do arquivo original salvo em: {backup_path}")
        
        return True
    
    except Exception as e:
        print(f"Erro ao processar o arquivo: {str(e)}")
        return False

if __name__ == "__main__":
    # Caminho para o arquivo data.js
    file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'js', 'data.js')
    
    print(f"Substituindo links do Telegram no arquivo: {file_path}")
    replace_telegram_links(file_path)

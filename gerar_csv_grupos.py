import json
import csv
import re

def carregar_grupos():
    with open('js/data.js', 'r', encoding='utf-8') as f:
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
    
    return json.loads(grupos_str)

def main():
    # Carrega os grupos
    grupos = carregar_grupos()
    
    # Formata os dados e ordena por estado
    dados_formatados = []
    for grupo in grupos:
        nome_grupo = f"Plantões Médicos {grupo['microregiao']} - {grupo['estado']}"
        dados_formatados.append({
            'estado': grupo['estado'],
            'nome_grupo': nome_grupo
        })
    
    # Ordena por estado
    dados_formatados.sort(key=lambda x: x['estado'])
    
    # Escreve no CSV
    with open('grupos_por_estado.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Estado', 'Nome do Grupo'])
        for grupo in dados_formatados:
            writer.writerow([grupo['estado'], grupo['nome_grupo']])

if __name__ == '__main__':
    main() 
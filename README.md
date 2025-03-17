# Plantões Médicos

Um website para facilitar o acesso a grupos de Telegram para plantões médicos em diferentes regiões do Brasil.

## Descrição

Este projeto é um site estático que utiliza HTML, CSS e JavaScript para exibir uma lista organizada de grupos do Telegram relacionados a plantões médicos em várias regiões do Brasil. Os usuários podem navegar pelos grupos disponíveis, filtrar por estado e microrregião, e acessar diretamente os links para os grupos do Telegram.

## Estrutura do Projeto

```
├── css/
│   └── style.css          # Estilos do site
├── js/
│   ├── data.js            # Dados dos grupos em formato JSON
│   └── main.js            # Lógica JavaScript para o site
├── img/                   # Pasta para imagens
├── index.html             # Página principal
├── robots.txt             # Diretrizes para bots de busca
├── sitemap.xml            # Mapa do site para buscadores
└── scripts Python (para uso futuro):
    ├── criar_grupos.py
    ├── criar_grupos_telegram.py
    └── obter_links_grupos.py
```

## Características

- Navegação simples e intuitiva
- Listagem de grupos por estado e microrregião
- Design responsivo (adaptável a dispositivos móveis)
- Busca rápida de grupos específicos

## Como Usar

1. Acesse o site através do GitHub Pages
2. Navegue pelos estados disponíveis na seção "Grupos Disponíveis"
3. Clique em uma microrregião para acessar diretamente o grupo do Telegram
4. Ou use o seletor de estado e microrregião na seção "Encontre Seu Grupo" para uma busca mais direcionada

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome (para ícones)

## Desenvolvimento Local

Para executar este projeto localmente:

1. Clone este repositório
2. Abra o arquivo `index.html` em qualquer navegador web moderno

Nenhum servidor ou instalação de dependências é necessário, pois este é um site estático.

## Scripts Python (para uso futuro)

O projeto inclui alguns scripts Python para administração e geração de dados:

- `criar_grupos.py`: Ferramenta para criar grupos no Telegram
- `criar_grupos_telegram.py`: Script para gerenciamento de grupos
- `obter_links_grupos.py`: Extrai links de grupos existentes

Para usar estes scripts, você vai precisar instalar as dependências do Python listadas em `requirements.txt`.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
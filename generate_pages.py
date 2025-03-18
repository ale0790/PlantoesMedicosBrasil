import os
import threading
from queue import Queue
import json
from datetime import datetime

# Template base da página
PAGE_TEMPLATE = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantão Médico {city} {state} | Vagas e Oportunidades para Médicos</title>
    <meta name="description" content="Encontre plantões médicos em {city}-{state}. Vagas urgentes, escalas mensais e oportunidades para médicos. Conecte-se diretamente com hospitais e clínicas da região.">
    <meta name="keywords" content="plantão médico {city}, vaga médico {city}, escala médica {city} {state}, trabalho médico {city}, oportunidades médicas {state_name}, plantões hospital {city}">
    <meta name="author" content="Grupo de Plantões Médicos Brasil">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://plantoesmedicosbrasil.com.br/{slug}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://plantoesmedicosbrasil.com.br/{slug}">
    <meta property="og:title" content="Plantão Médico {city} {state} | Vagas e Oportunidades">
    <meta property="og:description" content="Encontre plantões médicos em {city}-{state}. Vagas urgentes e oportunidades para médicos. Conecte-se com hospitais e clínicas da região.">
    <meta property="og:image" content="https://plantoesmedicosbrasil.com.br/images/{slug}.jpg">

    <!-- Schema.org markup for Google -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Plantões Médicos em {city}-{state}",
      "description": "Oportunidades de plantões médicos em {city}. Conecte-se com hospitais e clínicas da região.",
      "identifier": {{
        "@type": "PropertyValue",
        "name": "Grupo de Plantões Médicos Brasil",
        "value": "GPMB-{code}"
      }},
      "jobLocation": {{
        "@type": "Place",
        "address": {{
          "@type": "PostalAddress",
          "addressLocality": "{city}",
          "addressRegion": "{state}",
          "addressCountry": "BR"
        }}
      }},
      "employmentType": ["FULL_TIME", "PART_TIME", "TEMPORARY"],
      "occupationalCategory": "Medical Doctors"
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
                <a href="#grupo-telegram"><i class="fas fa-users"></i> Grupo Regional</a>
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
                <div class="cta-buttons">
                    <a href="{telegram_link}" class="btn-primary">
                        Entrar no Grupo de {city} <i class="fab fa-telegram"></i>
                    </a>
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
        <section id="grupo-telegram" class="cta-section">
            <div class="container">
                <h2>Junte-se ao Grupo de {city}</h2>
                <p>Conecte-se com as melhores oportunidades de plantão médico em {city} e região</p>
                <a href="{telegram_link}" class="btn-telegram">
                    <i class="fab fa-telegram"></i> Entrar no Grupo do Telegram
                </a>
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
                <div class="cta-empresas">
                    <a href="{telegram_link}" class="btn-empresas">
                        <i class="fab fa-telegram"></i> Participar do Grupo
                    </a>
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
                    <a href="#grupo-telegram"><i class="fas fa-users"></i> Grupo Regional</a>
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
    return f"{city.lower().replace(' ', '-').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('ã', 'a').replace('õ', 'o')}-{state.lower()}"

def create_code(city):
    """Cria um código único para a cidade"""
    return city[:3].upper()

def generate_page(city, state, state_name, telegram_link):
    """Gera uma página HTML para uma cidade específica"""
    slug = create_slug(city, state)
    code = create_code(city)
    
    # Substitui as variáveis no template
    content = PAGE_TEMPLATE.format(
        city=city,
        state=state,
        state_name=state_name,
        slug=slug,
        code=code,
        telegram_link=telegram_link
    )
    
    # Cria o arquivo
    filename = f"{slug}.html"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Página criada: {filename}")

def worker(queue):
    """Função executada por cada thread"""
    while True:
        try:
            city, state, state_name, telegram_link = queue.get_nowait()
            generate_page(city, state, state_name, telegram_link)
        except Queue.Empty:
            break

def main():
    # Lista de cidades e seus dados
    cities = [
        ("Paragominas", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Itaituba", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Guamá", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Belém", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Castanhal", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Bragança", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Abaetetuba", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Cametá", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Tucuruí", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Parauapebas", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        ("Canaã dos Carajás", "PA", "Pará", "https://t.me/+b4STrHJLPvdlNWQx"),
        # Adicione mais cidades conforme necessário
    ]
    
    # Cria uma fila com todas as cidades
    queue = Queue()
    for city_data in cities:
        queue.put(city_data)
    
    # Cria e inicia as threads
    threads = []
    num_threads = min(10, len(cities))  # Usa no máximo 10 threads
    
    for _ in range(num_threads):
        t = threading.Thread(target=worker, args=(queue,))
        t.start()
        threads.append(t)
    
    # Aguarda todas as threads terminarem
    for t in threads:
        t.join()
    
    print("Todas as páginas foram geradas!")

if __name__ == "__main__":
    main() 
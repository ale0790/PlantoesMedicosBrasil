// Menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');
let menuAberto = false;

// Função para alternar o menu
function toggleMenu() {
    menuAberto = !menuAberto;
    navLinks.style.display = menuAberto ? 'flex' : 'none';
    // Removendo a linha desnecessária, o ícone sempre permanece visível devido ao nosso CSS
}

// Evento de clique no ícone do menu
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede a propagação do evento para o documento
    toggleMenu();
});

// Fechar menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuAberto = false;
            navLinks.style.display = 'none';
        }
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
    // Verifica se o menu está aberto e se o clique não foi no menu nem no ícone de menu
    if (menuAberto && !navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
        menuAberto = false;
        navLinks.style.display = 'none';
    }
});

// Ajustar display do menu ao redimensionar
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = '';
        menuAberto = false;
    } else if (!menuAberto) {
        navLinks.style.display = 'none';
    }
});

// Seleção de estado e microregião
const estadoSelect = document.getElementById('estado-select');
const microregiaoSelect = document.getElementById('microregiao-select');

// Dados dos grupos
// Os dados virão do arquivo data.js que é carregado antes deste script

// Carregar dados do CSV
function carregarDadosGrupos() {
    try {
        // Preencher select de estados únicos
        const estados = [...new Set(gruposData.map(g => g.estado))].sort();
        estadoSelect.innerHTML = '<option value="">Selecione seu Estado</option>';
        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado;
            option.textContent = estadosMap[estado] ? `${estadosMap[estado]} (${estado})` : estado;
            estadoSelect.appendChild(option);
        });

        // Exibir grupos na seção de grupos disponíveis
        exibirGruposDisponiveis();
    } catch (error) {
        console.error('Erro ao carregar dados dos grupos:', error);
    }
}

// Inicializar a página quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', carregarDadosGrupos);

// Função para exibir grupos disponíveis
function exibirGruposDisponiveis() {
    const gruposContainer = document.getElementById('grupos-container');
    
    // Obter estados e ordenar alfabeticamente pelo nome completo
    const estados = [...new Set(gruposData.map(g => g.estado))];
    const estadosOrdenados = estados.sort((a, b) => {
        const nomeA = estadosMap[a] || a;
        const nomeB = estadosMap[b] || b;
        return nomeA.localeCompare(nomeB);
    });
    
    gruposContainer.innerHTML = ''; // Limpa o container
    
    // Criar tabela de estados
    const estadosTabela = document.createElement('div');
    estadosTabela.className = 'estados-tabela';
    gruposContainer.appendChild(estadosTabela);
    
    estadosOrdenados.forEach(estado => {
        // Criar linha do estado
        const estadoRow = document.createElement('div');
        estadoRow.className = 'estado-row';
        estadoRow.id = `estado-${estado}`;
        
        // Criar célula do estado
        const estadoCell = document.createElement('div');
        estadoCell.className = 'estado-cell';
        
        // Criar container de informações do estado
        const estadoInfo = document.createElement('div');
        estadoInfo.className = 'estado-info';
        
        // Ícone do estado
        const estadoIcon = document.createElement('i');
        estadoIcon.className = 'fas fa-map-marker-alt';
        
        // Título do estado com nome completo e sigla
        const estadoNome = document.createElement('span');
        estadoNome.className = 'estado-nome';
        estadoNome.innerHTML = `${estadosMap[estado] || estado} <span class="estado-sigla">(${estado})</span>`;
        
        // Adicionar elementos à informação do estado
        estadoInfo.appendChild(estadoIcon);
        estadoInfo.appendChild(estadoNome);
        
        // Ícone de toggle
        const toggleIcon = document.createElement('i');
        toggleIcon.className = 'fas fa-chevron-down toggle-icon';
        
        // Adicionar elementos à célula
        estadoCell.appendChild(estadoInfo);
        estadoCell.appendChild(toggleIcon);
        
        // Adicionar evento de clique para expandir/contrair
        estadoCell.addEventListener('click', () => {
            estadoRow.classList.toggle('active');
        });
        
        estadoRow.appendChild(estadoCell);
        
        // Container para as microregiões
        const microregioesContainer = document.createElement('div');
        microregioesContainer.className = 'microregioes-container';
        
        const microregioesGrid = document.createElement('div');
        microregioesGrid.className = 'microregioes-grid';
        microregioesContainer.appendChild(microregioesGrid);
        
        // Obter e ordenar as microregiões deste estado
        const microregioes = [...new Set(
            gruposData
                .filter(g => g.estado === estado)
                .map(g => g.microregiao)
        )].sort();
        
        // Criar cards para cada microregião
        microregioes.forEach(microregiao => {
            const grupo = gruposData.find(g => 
                g.estado === estado && 
                g.microregiao === microregiao
            );
            
            const card = document.createElement('a');
            card.href = grupo.link;
            card.target = '_blank';
            card.className = 'microregiao-card';
            card.setAttribute('title', `Entrar no grupo de ${microregiao}`);
            
            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';
            
            const icon = document.createElement('i');
            icon.className = 'fab fa-telegram';
            
            const title = document.createElement('h4');
            title.textContent = microregiao;
            
            const status = document.createElement('span');
            status.className = 'status-badge';
            status.textContent = grupo.status || 'Ativo';
            
            cardContent.appendChild(icon);
            cardContent.appendChild(title);
            cardContent.appendChild(status);
            card.appendChild(cardContent);
            microregioesGrid.appendChild(card);
        });
        
        estadoRow.appendChild(microregioesContainer);
        estadosTabela.appendChild(estadoRow);
    });
}

// Event listener para mudança de estado
estadoSelect.addEventListener('change', (e) => {
    const estado = e.target.value;
    microregiaoSelect.innerHTML = '<option value="">Selecione sua Microregião</option>';
    
    if (estado) {
        const microregioes = [...new Set(
            gruposData
                .filter(g => g.estado === estado)
                .map(g => g.microregiao)
        )].sort();
        
        microregioes.forEach(microregiao => {
            const option = document.createElement('option');
            option.value = microregiao;
            option.textContent = microregiao;
            microregiaoSelect.appendChild(option);
        });
    }
});

// Event listener para o botão de buscar
document.getElementById('buscar-grupo').addEventListener('click', () => {
    const estado = estadoSelect.value;
    const microregiao = microregiaoSelect.value;
    
    if (estado && microregiao) {
        const grupo = gruposData.find(g => 
            g.estado === estado && 
            g.microregiao === microregiao
        );
        
        if (grupo) {
            window.open(grupo.link, '_blank');
        } else {
            alert('Grupo não encontrado para esta região. Por favor, entre em contato conosco.');
        }
    } else {
        alert('Por favor, selecione o Estado e a Microregião.');
    }
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .content').forEach(element => {
    observer.observe(element);
});
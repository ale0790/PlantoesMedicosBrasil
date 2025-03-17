// Menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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
            option.textContent = estado;
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
    const estados = [...new Set(gruposData.map(g => g.estado))].sort();
    
    gruposContainer.innerHTML = ''; // Limpa o container

    estados.forEach(estado => {
        const estadoDiv = document.createElement('div');
        estadoDiv.className = 'estado-section';
        
        const estadoHeader = document.createElement('div');
        estadoHeader.className = 'estado-header';
        
        const estadoIcon = document.createElement('i');
        estadoIcon.className = 'fas fa-map-marker-alt';
        
        const estadoTitle = document.createElement('h3');
        estadoTitle.textContent = estado;
        
        estadoHeader.appendChild(estadoIcon);
        estadoHeader.appendChild(estadoTitle);
        estadoDiv.appendChild(estadoHeader);

        const microregioesGrid = document.createElement('div');
        microregioesGrid.className = 'microregioes-grid';

        const microregioes = [...new Set(
            gruposData
                .filter(g => g.estado === estado)
                .map(g => g.microregiao)
        )].sort();

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

        estadoDiv.appendChild(microregioesGrid);
        gruposContainer.appendChild(estadoDiv);
    });
}

// Event listener para mudança de estado
estadoSelect.addEventListener('change', (e) => {
    const estado = e.target.value;
    microregiaoSelect.innerHTML = '<option value="">Selecione sua Microregião</option>';
    
    if (estado) {
        const microregioes = gruposData
            .filter(g => g.estado === estado)
            .map(g => g.microregiao)
            .sort();
        
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
    
    if (!estado || !microregiao) {
        alert('Por favor, selecione um estado e uma microregião.');
        return;
    }
    
    const grupo = gruposData.find(g => 
        g.estado === estado && 
        g.microregiao === microregiao
    );
    
    if (grupo && grupo.link) {
        window.open(grupo.link, '_blank');
    } else {
        alert('Grupo não encontrado para esta região.');
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
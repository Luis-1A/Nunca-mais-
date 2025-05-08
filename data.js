
  const plants = [
  {
    title: 'Jardinagem',
    description: 'Serviços completos de jardinagem para manter seu espaço verde saudável e bonito.',
    category: 'Jardinagem',
    image: './assets/jardinagem.jpg'
  },
  {
    title: 'Irrigação',
    description: 'Instalação e manutenção de sistemas de irrigação para eficiência no uso da água.',
    category: 'Irrigação',
    image: './assets/irrigação.jpg'
  },
  {
    title: 'Manutenção de Jardins',
    description: 'Podas, limpeza, adubação e cuidados regulares para jardins sempre bem cuidados.',
    category: 'Manutenção',
    image: './assets/manutenção.jpg'
  },
  {
    title: 'Serviços Elétricos',
    description: 'Instalações e reparos elétricos voltados para áreas externas e jardins.',
    category: 'Elétrica',
    image: './assets/img1.jpg'
  },
  {
    title: 'Automatização',
    description: 'Automação de sistemas como irrigação, iluminação e sensores para jardins.',
    category: 'Automatização',
    image: './assets/automação.jpg'
  },
  {
    title: 'Serviços para Condomínios',
    description: 'Atendimento especializado para áreas verdes de condomínios e residenciais.',
    category: 'Condomínio',
    image: './assets/condomínio.jpg'
  },
  {
    title: 'Serviços Prediais',
    description: 'Manutenção de áreas comuns com foco em paisagismo e conservação externa.',
    category: 'Predial',
    image: './assets/img1.jpg'
  },
  {
    title: 'Limpeza de Piscinas',
    description: 'Limpeza, tratamento da água e manutenção preventiva de piscinas.',
    category: 'Piscinas',
    image: './assets/piscina.jpg'
  },
  {
    title: 'Combate a Pragas',
    description: 'Soluções ecológicas para controle e prevenção de pragas em áreas verdes.',
    category: 'Pragas',
    image: './assets/pragas.jpg'
  },
  {
    title: 'Adubação',
    description: 'Nutrição do solo com adubos adequados para estimular o crescimento saudável.',
    category: 'Adubação',
    image: './assets/img1.jpg'
  },
  {
    title: 'Nivelação de Terrenos',
    description: 'Correção e nivelamento de terrenos para paisagismo ou preparação de obra.',
    category: 'Nivelação',
    image: './assets/planagem.jpg'
  }
];

  const container = document.querySelector('.plants');

  function renderServices() {
    container.innerHTML = '';
    plants.forEach(service => {
      const card = document.createElement('div');
      card.className = 'plant fade-in';
      card.style.cursor = 'pointer';

      const message = encodeURIComponent(`Olá! Vi o serviço "${service.title}" no site e tenho interesse em saber mais sobre ele.`);
      const link = `https://wa.me/5561992286508?text=${message}`;

      card.innerHTML = `
        <a href="${link}" target="_blank" style="text-decoration: none; color: inherit;">
          <img src="${service.image}" alt="${service.title}" />
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </a>
      `;

      container.appendChild(card);
    });
  }

  // Chama a função ao carregar
  document.addEventListener('DOMContentLoaded', renderServices);
// Criação do modal via JavaScript
const modalOverlay = document.createElement("div");
modalOverlay.id = "whatsAppModal";
modalOverlay.className = "modal-overlay hidden";
modalOverlay.innerHTML = `
  <div class="modal-box">
    <h2>Redirecionando...</h2>
    <p id="modalText">Você será direcionado para o WhatsApp em <span id="countdown">6</span> segundos.</p>
    <div class="loading-bar"><div class="progress"></div></div>
  </div>
`;
document.body.appendChild(modalOverlay);

// Estilos via JavaScript
const style = document.createElement('style');
style.textContent = `
  .modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.6); display: flex;
    align-items: center; justify-content: center; z-index: 999;
  }
  .modal-box {
    background: white; padding: 30px; border-radius: 10px;
    text-align: center; animation: fadeIn 0.5s ease-out;
    max-width: 300px; width: 90%;
  }
  .modal-box h2 { margin-bottom: 10px; color: #25D366; }
  .loading-bar { margin-top: 20px; background-color: #ddd;
    border-radius: 20px; overflow: hidden; height: 8px; }
  .progress {
    height: 100%; width: 0%;
    background-color: #25D366;
    animation: loadProgress 6s linear forwards;
  }
  @keyframes loadProgress { 0% { width: 0%; } 100% { width: 100%; } }
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  .hidden { display: none; }
`;
document.head.appendChild(style);

// Função do modal
function showRedirectModal(serviceTitle) {
  const modal = document.getElementById("whatsAppModal");
  const countdownEl = document.getElementById("countdown");
  const message = `Olá! Estou interessado no serviço "${serviceTitle}" que vi no site e gostaria de saber mais.`;
  const whatsappUrl = `https://wa.me/5561992286508?text=${encodeURIComponent(message)}`;

  let seconds = 6;
  countdownEl.textContent = seconds;
  modal.classList.remove("hidden");

  // Reinicia barra de carregamento
  const progress = document.querySelector(".progress");
  progress.style.animation = "none";
  progress.offsetHeight; // força repaint
  progress.style.animation = null;

  const countdown = setInterval(() => {
    seconds--;
    countdownEl.textContent = seconds;
    if (seconds === 0) {
      clearInterval(countdown);
      modal.classList.add("hidden");
      window.open(whatsappUrl, "_blank");
    }
  }, 1000);
}

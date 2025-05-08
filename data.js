
  const plants = [
    {
      title: 'Jardinagem Residencial',
      description: 'Cuidamos do seu jardim com técnicas profissionais para manter o verde sempre bonito.',
      category: 'Jardinagem',
      image: './assets/img1.png'
    },
    {
      title: 'Instalação de Irrigação Automática',
      description: 'Sistema moderno para manter seu jardim hidratado sem desperdício de água.',
      category: 'Irrigação',
      image: './assets/img1.png'
    },
    {
      title: 'Manutenção de Jardins',
      description: 'Podas, adubação, controle de pragas e tudo que seu jardim precisa regularmente.',
      category: 'Manutenção',
      image: './assets/img1.png'
    },
    {
      title: 'Iluminação de Jardins',
      description: 'Projetos de iluminação paisagística para valorizar seu espaço externo à noite.',
      category: 'Elétrica',
      image: './assets/img1.png'
    },
    {
      title: 'Automatização de Sistemas',
      description: 'Tecnologia para programar irrigação, iluminação e sensores no seu jardim.',
      category: 'Automatização',
      image: './assets/img1.png'
    },
    {
      title: 'Paisagismo Personalizado',
      description: 'Desenvolvemos projetos de paisagismo sob medida para cada cliente.',
      category: 'Jardinagem',
      image: './assets/img1.png'
    },
    {
      title: 'Serviços Elétricos Externos',
      description: 'Instalação e manutenção de pontos de energia e tomadas para jardins.',
      category: 'Elétrica',
      image: './assets/img1.png'
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

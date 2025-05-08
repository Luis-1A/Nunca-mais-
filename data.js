
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
// service_redirector.js - identifica serviço clicado, mostra modal e redireciona para WhatsApp

// ------------------------------------------------------------ // UTILITÁRIOS GERAIS // ------------------------------------------------------------

/**

Faz log de debug no console, só ativa se DEBUG = true */ const DEBUG = true; function logDebug(...args) { if (DEBUG) console.debug("[DEBUG]", ...args); }


/**

Trims and normalizes text for comparison

@param {string} text

@returns {string} */ function normalizeText(text) { return text .trim() .toLowerCase() .replace(/\s+/g, " "); }


/**

Encontra o elemento mais próximo com a tag ou classe informada

@param {Element} el - elemento de referência

@param {string} selector - CSS selector para buscar

@returns {Element|null} */ function findClosest(el, selector) { let current = el; while (current && current !== document) { if (current.matches(selector)) return current; current = current.parentElement; } return null; }


// ------------------------------------------------------------ // DETECTOR DE SERVIÇO // ------------------------------------------------------------

/**

Classe ServiceDetector: identifica qual serviço corresponde ao botão clicado */ class ServiceDetector { constructor() { logDebug("ServiceDetector iniciado"); }


/**

Dado o elemento de botão, encontra o título e descrição mais próximos

@param {Element} buttonEl

@returns {{title: string, description: string}} */ detect(buttonEl) { // Procura o elemento pai que envolve todo o card const card = findClosest(buttonEl, ".plant_items"); if (!card) { logDebug("Card não encontrado, usando fallback"); return { title: "serviço", description: "" }; }


// Tenta encontrar h3 dentro do card
const titleEl = card.querySelector("h3");
// Tenta encontrar p dentro do card
const descEl = card.querySelector("p");

const title = titleEl ? titleEl.textContent : "serviço";
const description = descEl ? descEl.textContent : "";

logDebug("Serviço detectado:", title, description);
return { title: normalizeText(title), description: normalizeText(description) };

} }

// ------------------------------------------------------------ // GERENCIADOR DE MODAL // ------------------------------------------------------------

/**

Classe ModalManager: exibe modal com contagem regressiva */ class ModalManager { constructor() { this._createModalElements(); }


/**

Cria elementos do modal e adiciona ao DOM */ _createModalElements() { logDebug("Criando elementos do modal");


// Overlay
this.overlay = document.createElement("div");
this.overlay.id = "whatsAppModal";
this.overlay.className = "modal-overlay hidden";

// Box interna
const box = document.createElement("div");
box.className = "modal-box";

// Título
const h2 = document.createElement("h2");
h2.textContent = "Redirecionando...";
h2.style.color = "#25D366";
box.appendChild(h2);

// Texto e contador
const p = document.createElement("p");
p.id = "modalText";
p.innerHTML = `Você será direcionado para o WhatsApp em <span id="countdown">6</span> segundos.`;
box.appendChild(p);

// Barra de progresso
const loadingBar = document.createElement("div");
loadingBar.className = "loading-bar";
const progress = document.createElement("div");
progress.className = "progress";
loadingBar.appendChild(progress);
box.appendChild(loadingBar);

this.overlay.appendChild(box);
document.body.appendChild(this.overlay);

// Adiciona estilos do modal
this._injectStyles();

}

/**

Injeta estilos CSS no head */ _injectStyles() { const style = document.createElement('style'); style.textContent = .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); display: flex; align-items: center; justify-content: center; z-index: 999; } .modal-box { background: white; padding: 30px; border-radius: 10px; text-align: center; animation: fadeIn 0.5s ease-out; max-width: 300px; width: 90%; } .modal-box h2 { margin-bottom: 10px; } .loading-bar { margin-top: 20px; background-color: #ddd; border-radius: 20px; overflow: hidden; height: 8px; } .progress { height: 100%; width: 0%; background-color: #25D366; animation: loadProgress 6s linear forwards; } @keyframes loadProgress { 0% { width: 0%; } 100% { width: 100%; } } @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } } .hidden { display: none; }; document.head.appendChild(style); }


/**

Exibe modal e inicia contagem

@param {string} serviceTitle

@param {function} callback - função a executar ao fim da contagem */ show(serviceTitle, callback) { logDebug("Mostrando modal para serviço:", serviceTitle); const modal = this.overlay; const countdownEl = modal.querySelector('#countdown'); let seconds = 6; countdownEl.textContent = seconds; modal.classList.remove('hidden');


// Reinicia animação
const progress = modal.querySelector('.progress');
progress.style.animation = 'none';
void progress.offsetWidth;
progress.style.animation = null;

const interval = setInterval(() => {
  seconds -= 1;
  countdownEl.textContent = seconds;
  if (seconds <= 0) {
    clearInterval(interval);
    modal.classList.add('hidden');
    callback();
  }
}, 1000);

} }

// ------------------------------------------------------------ // GERENCIADOR DE REDIRECIONAMENTO // ------------------------------------------------------------

/**

Classe WhatsAppRedirector: orquestra detecção e modal e redirecionamento */ class WhatsAppRedirector { constructor(phone) { this.phone = phone; this.detector = new ServiceDetector(); this.modal = new ModalManager(); this._attachListeners(); }


/**

Anexa listeners a todos os botões info.svg */ _attachListeners() { logDebug("Anexando listeners aos ícones info.svg"); // Delegação de evento: observa clicks em todo documento document.body.addEventListener('click', (e) => { const infoCont = findClosest(e.target, '.info_cont'); if (infoCont) { e.preventDefault(); const { title } = this.detector.detect(infoCont); this._redirectFlow(title); } }); }


/**

Fluxo de redirecionamento: mostra modal e abre WhatsApp

@param {string} serviceTitle */ _redirectFlow(serviceTitle) { const callback = () => this._openWhatsApp(serviceTitle); this.modal.show(serviceTitle, callback); }


/**

Abre WhatsApp com mensagem personalizada

@param {string} serviceTitle */ _openWhatsApp(serviceTitle) { const message = Olá! Estou interessado no serviço "${serviceTitle}" e gostaria de saber mais.; const url = https://wa.me/${this.phone}?text=${encodeURIComponent(message)}; logDebug("Abrindo WhatsApp com URL:", url); window.open(url, '_blank'); } }


// ------------------------------------------------------------ // INICIALIZAÇÃO // ------------------------------------------------------------

// Número de WhatsApp da empresa (com DDI e DDD, ex "5561992286508") const WHATSAPP_PHONE = '5561992286508';

// Inicializa redirecionador window.addEventListener('DOMContentLoaded', () => { new WhatsAppRedirector(WHATSAPP_PHONE); });

// ------------------------------------------------------------ // FIM DO ARQUIVO // ------------------------------------------------------------


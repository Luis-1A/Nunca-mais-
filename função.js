const body = document.querySelector('body');
const cloud = document.getElementById('cloud');
const modal = document.getElementById('modal');
const warning = document.getElementById('warning'); 
const minHeight = 0;
const minWidth = 0;
const waitTime = 10; // Tempo em segundos até redirecionar

// Cria a mensagem de carregamento
const loadingMessage = document.createElement('div');
loadingMessage.id = 'loading-message';
loadingMessage.style.position = 'fixed';
loadingMessage.style.top = '1rem';
loadingMessage.style.left = '50%';
loadingMessage.style.transform = 'translateX(-50%)';
loadingMessage.style.textAlign = 'center';
loadingMessage.style.fontSize = '2.5rem';
loadingMessage.style.fontWeight = 'bold';
loadingMessage.style.color = '#111';
loadingMessage.style.zIndex = '9999';
loadingMessage.innerText = `Carregando... (${waitTime}s)`;
document.body.appendChild(loadingMessage);

// Cria o botão "Pular Animação"
const skipButton = document.createElement('button');
skipButton.innerText = 'Pular Animação';
skipButton.style.position = 'fixed';
skipButton.style.top = '1rem';
skipButton.style.right = '1rem';
skipButton.style.padding = '1rem 2rem';
skipButton.style.fontSize = '1.5rem';
skipButton.style.fontWeight = 'bold';
skipButton.style.cursor = 'pointer';
skipButton.style.backgroundColor = '#ff3333'; // Vermelho vibrante
skipButton.style.color = '#fff';
skipButton.style.border = 'none';
skipButton.style.borderRadius = '12px';
skipButton.style.zIndex = '10000';
skipButton.style.animation = 'blink 1s infinite';
document.body.appendChild(skipButton);

// Animação de piscar
const style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;
document.head.appendChild(style);

// Ação do botão
skipButton.addEventListener('click', () => {
  window.location.href = 'serviços.html';
});

// Atualiza contador regressivo
let remaining = waitTime;
const countdown = setInterval(() => {
  remaining--;
  loadingMessage.innerText = `Carregando... (${remaining}s)`;
  if (remaining <= 0) clearInterval(countdown);
}, 1000);

// Verifica tamanho da janela
const checkWindowSize = () => {
  const dimensions = [window.innerHeight, window.innerWidth];
  const displayModal = () => {
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
  };
  
  if (dimensions[0] < minHeight && dimensions[1] > minWidth) {
    warning.innerText = 'Please increase your viewport height.';
    displayModal();
  } else if (dimensions[0] > minHeight && dimensions[1] < minWidth) {
    warning.innerText = 'Please increase your viewport width.';
    displayModal();
  } else if (dimensions[0] < minHeight && dimensions[1] < minWidth) {
    warning.innerText = 'Please increase your viewport height and width.';
    displayModal();
  } else {
    modal.style.display = 'none';
  }
};

// Inicia animação de chuva
const startRainAnimation = () => {
  if (body.classList.contains('active') || window.innerHeight < minHeight) return;

  body.classList.add('active');

  // Começa a chuva
  let rainfall;
  setTimeout(() => {
    rainfall = setInterval(() => {
      const drop = document.createElement('div');
      const left = `${(Math.random() * 11) + 7}rem`;
      drop.classList.add('rain-drop');
      drop.style.left = left;
      cloud.appendChild(drop);
    }, 5);
  }, 600);

  // Para a chuva
  setTimeout(() => {
    window.clearInterval(rainfall);
  }, 1800);

  // Remove gotas e redireciona
  setTimeout(() => {
    const dropsList = Array.from(document.getElementsByClassName('rain-drop'));
    dropsList.forEach(() => {
      if (cloud.lastChild) {
        cloud.removeChild(cloud.lastChild);
      }
    });

    body.classList.remove('active');
    loadingMessage.remove();
    skipButton.remove();
    window.location.href = 'serviços.html';
  }, waitTime * 1000);
};

// Espera carregar e inicia animação
window.addEventListener('DOMContentLoaded', () => {
  checkWindowSize();
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      startRainAnimation();
    }, 500);
  });
});
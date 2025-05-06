const services = [
  {
    title: 'Jardinagem Residencial',
    description: 'Cuidamos do seu jardim com técnicas profissionais para manter o verde sempre bonito.',
    image: './assets/img1.png'
  },
  {
    title: 'Instalação de Irrigação Automática',
    description: 'Sistema moderno para manter seu jardim hidratado sem desperdício de água.',
    image: './assets/img1.png'
  },
  {
    title: 'Manutenção de Jardins',
    description: 'Podas, adubação, controle de pragas e tudo que seu jardim precisa regularmente.',
    image: './assets/img1.png'
  },
  {
    title: 'Iluminação de Jardins',
    description: 'Projetos de iluminação paisagística para valorizar seu espaço externo à noite.',
    image: './assets/img1.png'
  },
  {
    title: 'Automatização de Sistemas',
    description: 'Tecnologia para programar irrigação, iluminação e sensores no seu jardim.',
    image: './assets/img1.png'
  },
  {
    title: 'Paisagismo Personalizado',
    description: 'Desenvolvemos projetos de paisagismo sob medida para cada cliente.',
    image: './assets/img1.png'
  },
  {
    title: 'Serviços Elétricos Externos',
    description: 'Instalação e manutenção de pontos de energia e tomadas para jardins.',
    image: './assets/img1.png'
  }
];

function criarBotoes() {
  const container = document.querySelector('.plants');
  container.innerHTML = '';

  services.forEach(servico => {
    const botao = document.createElement('button');
    botao.className = 'btn fade-in';
    botao.style.display = 'flex';
    botao.style.flexDirection = 'column';
    botao.style.alignItems = 'center';
    botao.style.justifyContent = 'center';
    botao.style.padding = '16px';
    botao.style.margin = '10px';
    botao.style.border = '1px solid #ccc';
    botao.style.borderRadius = '8px';
    botao.style.cursor = 'pointer';
    botao.style.backgroundColor = '#fff';
    botao.style.transition = 'transform 0.3s ease';
    botao.onmouseover = () => botao.style.transform = 'scale(1.03)';
    botao.onmouseout = () => botao.style.transform = 'scale(1)';

    const msg = encodeURIComponent(`Olá! Estou interessado no serviço "${servico.title}" que vi no site e gostaria de saber mais.`);
    const link = `https://wa.me/5561992286508?text=${msg}`;
    botao.onclick = () => window.open(link, '_blank');

    botao.innerHTML = `
      <img src="${servico.image}" alt="${servico.title}" style="width: 100px; height: auto; margin-bottom: 10px;" />
      <strong style="margin-bottom: 8px; font-size: 16px;">${servico.title}</strong>
      <p style="font-size: 14px; text-align: center;">${servico.description}</p>
    `;

    container.appendChild(botao);
  });
}

document.addEventListener('DOMContentLoaded', criarBotoes);

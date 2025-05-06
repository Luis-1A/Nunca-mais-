document.addEventListener('DOMContentLoaded', () => {
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

  const container = document.querySelector('.plants');
  if (!container) {
    console.error('Container .plants não encontrado!');
    return;
  }

  services.forEach(service => {
    const button = document.createElement('button');
    button.className = 'btn fade-in';
    button.style.display = 'flex';
    button.style.flexDirection = 'column';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.padding = '16px';
    button.style.margin = '10px';
    button.style.border = '1px solid #ccc';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#fff';
    button.style.transition = 'transform 0.3s ease';
    button.onmouseover = () => button.style.transform = 'scale(1.03)';
    button.onmouseout = () => button.style.transform = 'scale(1)';

    const msg = encodeURIComponent(`Olá! Estou interessado no serviço "${service.title}" que vi no site e gostaria de saber mais.`);
    button.onclick = () => window.open(`https://wa.me/5561992286508?text=${msg}`, '_blank');

    button.innerHTML = `
      <img src="${service.image}" alt="${service.title}" style="width: 100px; height: auto; margin-bottom: 10px;" />
      <strong style="margin-bottom: 8px; font-size: 16px;">${service.title}</strong>
      <p style="font-size: 14px; text-align: center;">${service.description}</p>
    `;

    container.appendChild(button);
  });
});


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

  function renderButtons() {
    const container = document.querySelector('.plants');
    container.innerHTML = '';

    plants.forEach(service => {
      const button = document.createElement('button');
      button.className = 'btn fade-in'; // usa mesma classe do botão "Visualizar todas"
      button.style.display = 'flex';
      button.style.flexDirection = 'column';
      button.style.alignItems = 'center';
      button.style.justifyContent = 'center';
      button.style.padding = '20px';
      button.style.margin = '10px';
      button.style.cursor = 'pointer';
      button.style.border = 'none';

      const msg = encodeURIComponent(`Olá! Vi o serviço "${service.title}" no site e tenho interesse em saber mais sobre ele.`);
      const link = `https://wa.me/5561992286508?text=${msg}`;

      button.onclick = () => window.open(link, '_blank');

      button.innerHTML = `
        <img src="${service.image}" alt="${service.title}" style="width: 100px; height: auto; margin-bottom: 10px;" />
        <strong style="margin-bottom: 8px;">${service.title}</strong>
        <p style="font-size: 14px;">${service.description}</p>
      `;

      container.appendChild(button);
    });
  }

  document.addEventListener('DOMContentLoaded', renderButtons);


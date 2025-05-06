
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

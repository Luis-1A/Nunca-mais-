function pesquisar() {
  const input = document.querySelector('.form_group')
  const pesquisa = input.value.trim().toLowerCase()
  const plantList = document.querySelector('.plants')
  plantList.innerHTML = '' // Limpa a lista antes de preencher com novos resultados

  // Verifica se há algum termo de pesquisa
  if (pesquisa === '') {
    alert('Por favor, digite um termo de pesquisa.')
    return
  }

  // Filtra as plantas com base na pesquisa
  const resultados = plants.filter(plant => {
    const termoMin = pesquisa.toLowerCase()
    return (
      plant.title.toLowerCase().includes(termoMin) ||
      plant.description.toLowerCase().includes(termoMin) ||
      plant.category.toLowerCase().includes(termoMin)
    )
  })

  // Exibe os resultados na página
  if (resultados.length === 0) {
    const nenhumResultado = document.createElement('p')
    nenhumResultado.classList.add('instructions')
    nenhumResultado.textContent = 'Nenhum resultado encontrado.'

    plantList.appendChild(nenhumResultado)
  } else {
    resultados.forEach(plant => {
      const plantItem = document.createElement('div')
      plantItem.classList.add('plant_item')

      plantItem.innerHTML = `
      <div class="plant_items">
        <div class="card-blur">
          <div class="items_content">
              <div class="items_content_img">
                  <img src=${plant.image} alt=${plant.title}>
              </div>
              <div class="items_content_text">
                  <h3>${plant.title}</h3>
                  <p>${plant.description}</p>
              </div>
              <div class="items_content_inner">
                  <span class="span_cont">${plant.category}</span>
                  <a href="#">
                      <div class="info_cont">
                          <img src="./assets/info.svg" alt="">
                      </div>
                  </a>
              </div>
          </div>
        </div>
      </div>
      `
      plantList.appendChild(plantItem)
    })
  }
}

function mostrarTodos() {
  const plantList = document.querySelector('.plants')
  plantList.innerHTML = ''

  plants.forEach(plant => {
    const plantItem = document.createElement('div')
    plantItem.classList.add('plant_item')
    plantItem.innerHTML = `
      <div class="plant_items">
        <div class="card-blur">
          <div class="items_content">
              <div class="items_content_img">
                  <img src=${plant.image} alt=${plant.title}>
              </div>
              <div class="items_content_text">
                  <h3>${plant.title}</h3>
                  <p>${plant.description}</p>
              </div>
              <div class="items_content_inner">
                  <span class="span_cont">${plant.category}</span>
                  <a href="#">
                      <div class="info_cont">
                          <img src="./assets/info.svg" alt="">
                      </div>
                  </a>
              </div>
          </div>
        </div>
      </div>
      `
    plantList.appendChild(plantItem)
  })
}

function openMenu() {
  const navMenu = document.querySelector('.nav_menu')
  const menuToggle = document.querySelector('.nav_icon button')
  const menuIcon = menuToggle.querySelector('.menu')

  navMenu.classList.toggle('active')

  if (navMenu.classList.contains('active')) {
    menuIcon.classList.remove('active')
  } else {
    menuIcon.classList.remove('active')
  }
}
const servicos = [
  {
    imagem: "./assets/img1.jpg",
    descricao: "Paisagismo completo em residência no bairro Jardim Verde"
  },
  {
    imagem: "./assets/img2.jpg",
    descricao: "Instalação de sistema de irrigação com sensores de umidade"
  },
  {
    imagem: "./assets/img3.jpg",
    descricao: "Projeto de iluminação de jardim com LED automatizado"
  }
];

let indexAtual = 0;
let intervalo;

function abrirCarrossel() {
  document.getElementById("carrosselModal").classList.remove("hidden");
  mostrarServico();
  intervalo = setInterval(proximoServico, 5000);
}

function fecharCarrossel() {
  document.getElementById("carrosselModal").classList.add("hidden");
  clearInterval(intervalo);
}

function mostrarServico() {
  const img = document.getElementById("carrosselImagem");
  const desc = document.getElementById("carrosselDescricao");
  img.src = servicos[indexAtual].imagem;
  desc.textContent = servicos[indexAtual].descricao;
}

function proximoServico() {
  indexAtual = (indexAtual + 1) % servicos.length;
  mostrarServico();
}

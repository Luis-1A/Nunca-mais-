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
    imagem: "./assets/img1.png",
    descricao: "Paisagismo completo em residência no bairro Jardim Verde"
  },
  {
    imagem: "./assets/img1.png",
    descricao: "Instalação de sistema de irrigação com sensores de umidade"
  },
  {
    imagem: "./assets/img.png",
    descricao: "Projeto de iluminação de jardim com LED automatizado"
  }
];

let indexAtual = 0;
let intervalo;

function abrirCarrossel() {
  const modal = document.getElementById("carrosselModal");
  modal.classList.remove("hidden");
  mostrarServico();
  intervalo = setInterval(proximoServico, 5000);
  criarBotaoFechar();
}

function fecharCarrossel() {
  const modal = document.getElementById("carrosselModal");
  modal.classList.add("hidden");
  clearInterval(intervalo);

  const btnFechar = document.getElementById("botaoFechar");
  if (btnFechar) {
    btnFechar.remove();
  }
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

function criarBotaoFechar() {
  if (document.getElementById("botaoFechar")) return; // Evita duplicar

  const btn = document.createElement("button");
  btn.id = "botaoFechar";
  btn.innerText = "Fechar";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "12px 20px";
  btn.style.fontSize = "16px";
  btn.style.backgroundColor = "#e74c3c";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "1000";
  btn.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  btn.style.animation = "piscar 1s infinite alternate";

  btn.onclick = fecharCarrossel;
  document.body.appendChild(btn);

  // Adiciona keyframe de piscar via JS
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes piscar {
      from { opacity: 1; }
      to { opacity: 0.5; }
    }
  `;
  document.head.appendChild(style);
}

// Executa "mostrarTodos()" ao carregar o site
window.addEventListener("load", () => {
  if (typeof mostrarTodos === "function") {
    mostrarTodos();
  }

  // Fechar com tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      fecharCarrossel();
    }
  });

  // Fechar ao clicar fora da modal
  const modal = document.getElementById("carrosselModal");
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      fecharCarrossel();
    }
  });
});

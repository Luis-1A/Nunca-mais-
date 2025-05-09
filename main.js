let header = document.querySelector(".header");
header = header.innerHTML = `<div class="menu-area">
    <div class="logo">
        <a href="index.html">
            <img src="images/logo_pizza.png" alt="logo_pizza.png">
        </a>
    </div>
    <nav>
        <div class="container-menu-mobile">
            <div class="menuMobile-area">
                <div class="menu-openner"><span>0</span>
                </div>
            </div>
            <label for="checkbox" class="menu_hamburger">
                <input type="checkbox" id="checkbox">
                <span class="line line-main"></span>
                <span class="line line-split"></span>
            </label>
        </div>
        <div class="menu">
            <ul>
                <a href="index.html">
                    <li>Início</li>
                </a>
                <a href="menu.html">
                    <li>Serviços</li>
                </a>
                <a href="sobre.html" target="_blank">
                    <li>Sobre</li>
                </a>
                <a href="https://wa.me/5561993715768?text=Ol%C3%A1!%20Vi%20algumas%20informa%C3%A7%C3%B5es%20no%20site%20e%20gostaria%20de%20saber%20mais" target="_blank">
                    <li>Contato</li>
                </a>
            </ul>
        </div>
    </nav>
</div>`;

let activePage = window.location.pathname;
let navLinks = document.querySelectorAll("nav .menu a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});

let toggleMenu = document.querySelector("#checkbox");
let openMenu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
    openMenu.classList.toggle("menu-opened");
});

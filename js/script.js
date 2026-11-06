/*=====================================================

YM DEV
Autor: Ygor Mantovani

Arquivo responsável por:

✔ Loader
✔ Menu Mobile
✔ Navbar
✔ Scroll Suave
✔ Botão Topo
✔ Contadores
✔ Reveal
✔ Typing Effect

=====================================================*/


/*=====================================================

LOADER

Esconde a tela de carregamento
quando toda página terminar de carregar.

=====================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loading");

    loader.classList.add("hide");

});


/*=====================================================

MENU MOBILE

=====================================================*/

const menuButton = document.querySelector("#menu-button");

const menu = document.querySelector("#menu");

function setMenuOpen(open) {
    menu.classList.toggle("active", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}
menuButton.addEventListener("click", () => setMenuOpen(!menu.classList.contains("active")));
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.classList.contains("active")) {
        setMenuOpen(false);
        menuButton.focus();
    }
});
document.addEventListener("click", event => {
    if (!event.target.closest("header")) setMenuOpen(false);
});
window.matchMedia("(max-width: 1024px)").addEventListener("change", () => setMenuOpen(false));


/*=====================================================

FECHAR MENU AO CLICAR

=====================================================*/

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        setMenuOpen(false);

    });

});


/*=====================================================

SCROLL SUAVE

=====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const href = this.getAttribute("href");
        if (href === "#") return;
        const destino = document.getElementById(href.slice(1));
        if (!destino) return;

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*=====================================================

HEADER

Muda a aparência ao rolar

=====================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scroll");

    }

    else {

        header.classList.remove("scroll");

    }

});


/*=====================================================

BOTÃO TOPO

=====================================================*/

const backButton = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backButton.classList.add("show");

    }

    else {

        backButton.classList.remove("show");

    }

});


backButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*=====================================================

SCROLL REVEAL

Anima elementos ao entrar na tela.

=====================================================*/

const revealElements = document.querySelectorAll(

    ".section-title,.section-description,.skill-card,.service-card,.project-card,.card,.timeline-item,.number-card,.contact-form"

);

function reveal() {

    revealElements.forEach(item => {

        const position = item.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if (position < screen - 120) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();
/*=====================================================

CONTADORES

=====================================================*/

const counters = document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    function update() {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(update, 20);

        }

        else {

            counter.innerText = target;

        }

    }

    update();

});
/*=====================================================

TYPING EFFECT

=====================================================*/

const title = document.querySelector(".hero h1");

const text = title.innerText;

title.innerHTML = "";

let index = 0;

function typing() {

    if (index < text.length) {

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing, 40);

    }

}

typing();
/*=====================================================

EFEITO LUZ

=====================================================*/

const glow = document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
/*=====================================================

EFEITO 3D NOS CARDS

=====================================================*/

const cards = document.querySelectorAll(

    ".project-card,.service-card,.skill-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;

        const rotateY = ((x / rect.width) - 0.5) * 10;

        card.style.transform =

            `perspective(800px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

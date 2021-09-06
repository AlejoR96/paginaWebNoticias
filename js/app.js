// Codigo JS para el boton del menu bars
document.querySelector(".btn-menu").addEventListener("click", () => {
 document.querySelector(".nav-menu").classList.toggle('show');
});

// Codigo JS para el scroll de la pagina
ScrollReveal().reveal('.show-case');
ScrollReveal().reveal('.show-case', {delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});


// min 1:06:12
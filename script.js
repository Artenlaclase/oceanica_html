const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Evento para mostrar/ocultar el menú
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about-us');
    setTimeout(() => {
        aboutSection.classList.add('show'); // Muestra la sección después de 2 segundos
    }, 2000); // Cambia el tiempo si lo deseas
});
// Variables
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const slides = document.querySelector('.carousel-slide');
let index = 0; // Índice de la imagen actual

// Función para mostrar la siguiente imagen
function nextSlide() {
  if (index >= slides.children.length - 1) {
    index = 0; // Vuelve al inicio del carrusel
  } else {
    index++;
  }
  updateCarousel();
}

// Función para mostrar la imagen anterior
function prevSlide() {
  if (index <= 0) {
    index = slides.children.length - 1; // Va al final del carrusel
  } else {
    index--;
  }
  updateCarousel();
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
  const width = slides.children[0].clientWidth;
  slides.style.transform = `translateX(-${index * width}px)`;
}

// Eventos para los botones
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Opcional: Reproducir el carrusel automáticamente cada 5 segundos
setInterval(nextSlide, 5000); // Cambia cada 5 segundos

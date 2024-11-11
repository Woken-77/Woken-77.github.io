let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

// Botón "siguiente"
document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volver al inicio
  }
  updateCarousel();
});

// Botón "anterior"
document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Volver al final
  }
  updateCarousel();
});

// Función para mover las imágenes
function updateCarousel() {
  const slideWidth = slides[0].clientWidth; // Ancho de una imagen
  document.querySelector('.carousel-slide').style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

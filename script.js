let currentIndex = 0;
let isUserInteracting = false;  // Para evitar el movimiento automático cuando el usuario interactúa

const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

function updateCarousel() {
  const newTransformValue = -currentIndex * 100;
  document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}%)`;
}

function goToNext() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;  // Vuelve a la primera imagen al llegar al final
  }
  updateCarousel();
}

function goToPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1;  // Vuelve a la última imagen al llegar al principio
  }
  updateCarousel();
}

prevButton.addEventListener('click', () => {
  isUserInteracting = true;
  goToPrev();
});

nextButton.addEventListener('click', () => {
  isUserInteracting = true;
  goToNext();
});

// Movimiento automático solo si el usuario no está interactuando
setInterval(() => {
  if (!isUserInteracting) {
    goToNext();
  }
}, 5000);  // Cambia la imagen cada 5 segundos

// Detener el movimiento automático cuando el usuario interactúa con las flechas
prevButton.addEventListener('mouseenter', () => {
  isUserInteracting = true;
});
nextButton.addEventListener('mouseenter', () => {
  isUserInteracting = true;
});

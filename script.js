let currentIndex = 0;

const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

function updateCarousel() {
  const newTransformValue = -currentIndex * 100;
  document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Loop back to last image
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to first image
  }
  updateCarousel();
});

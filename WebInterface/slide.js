let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? 'block' : 'none';
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();
  setInterval(showSlides, 1000); // Change image every 3 seconds
});

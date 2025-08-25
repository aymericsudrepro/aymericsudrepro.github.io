class Carousel {
  constructor(container) {
    this.container = container;
    this.prevButton = container.querySelector("#prev");
    this.nextButton = container.querySelector("#next");
    this.carouselInner = container.querySelector(".carousel-inner");
    this.slides = container.querySelectorAll(".slide");
    this.currentIndex = 0;

    this.init();
  }

  init() {
    this.prevButton.addEventListener("click", () => this.prevSlide());
    this.nextButton.addEventListener("click", () => this.nextSlide());

    // Démarrer le défilement automatique
    setInterval(() => this.nextSlide(), 7500);
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100;
    this.carouselInner.style.transform = `translateX(${offset}%)`;
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
    this.updateCarousel();
  }
}

// Initialiser tous les carousels sur la page
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => new Carousel(carousel));
});

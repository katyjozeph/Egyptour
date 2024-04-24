document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
        slide.classList.add('active');
        } else {
        slide.classList.remove('active');
        }
    });
    }
    function nextSlide() {
    currentSlide = (currentSlide + 1) % 5;
    showSlide(currentSlide);
    }
    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
});
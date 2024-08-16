const krest1 = document.querySelector('.hz-krest1');

krest1.addEventListener('click', function () {
    krest1.classList.toggle('active');
});


const krest2 = document.querySelector('.hz-krest2');

krest2.addEventListener('click', function () {
    krest2.classList.toggle('active');
});


const krest3 = document.querySelector('.hz-krest3');

krest3.addEventListener('click', function () {
    krest3.classList.toggle('active');
});


const krest4 = document.querySelector('.hz-krest4');

krest4.addEventListener('click', function () {
    krest4.classList.toggle('active');
});


const krest5 = document.querySelector('.hz-krest5');

krest5.addEventListener('click', function () {
    krest5.classList.toggle('active');
});



const krestElements = document.querySelectorAll('.hz-krest');

krestElements.forEach(krest => {
    krest.addEventListener('click', () => {

        krestElements.forEach(element => {
            element.classList.remove('active');
        });

        krest.classList.add('active');
    });
});


const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideWidth = slides[0].clientWidth + parseInt(getComputedStyle(slides[0]).marginRight) * 2;

function showSlide(index) {
    sliderWrapper.style.transform = `translateX(${-index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    showSlide(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
}, 3000);

showSlide(currentIndex);
const krest6 = document.querySelector('.hz-krest1');

krest6.addEventListener('click', function () {
    krest6.classList.toggle('active');
});


const krest7 = document.querySelector('.hz-krest2');

krest7.addEventListener('click', function () {
    krest7.classList.toggle('active');
});


const krest8 = document.querySelector('.hz-krest3');

krest8.addEventListener('click', function () {
    krest8.classList.toggle('active');
});


const krest9 = document.querySelector('.hz-krest4');

krest9.addEventListener('click', function () {
    krest9.classList.toggle('active');
});


const krest0 = document.querySelector('.hz-krest5');

krest0.addEventListener('click', function () {
    krest0.classList.toggle('active');
});

const krestsElements = document.querySelectorAll('.hz-krests');

krestsElements.forEach(krest => {
    krest.addEventListener('click', () => {

        krestsElements.forEach(element => {
            element.classList.remove('active');
        });

        krest.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.getElementById('unique-slider-wrapper');
    const indicators = document.querySelectorAll('.unique-slider-indicator');
    let currentSlide = 0;
    const totalSlides = 5; // Всего 5 слайдов
    const visibleSlides = 3; // Показываем только 3 слайда

    function updateSlider() {
        const offset = -(currentSlide * (211 + 109)); // Ширина слайда + отступ
        sliderWrapper.style.transform = `translateX(${offset}px)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('unique-slider-active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % (totalSlides - visibleSlides + 1);
        updateSlider();
    }

    document.getElementById('unique-slider-left-arrow').addEventListener('click', function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    document.getElementById('unique-slider-right-arrow').addEventListener('click', function() {
        if (currentSlide < totalSlides - visibleSlides) {
            currentSlide++;
            updateSlider();
        }
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
        });
    });

    // Автоматическое пролистывание
    setInterval(nextSlide, 3000);

    updateSlider();
});

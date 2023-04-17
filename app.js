let menuHover = document.querySelector('.menu-hover')
let menu = document.querySelector('.menu')
let blockSlide = document.querySelector('.block-slide')
menu.addEventListener('click', tglMenu)
function tglMenu(){
    menuHover.classList.toggle('addMenu')

}





const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  slides[n].classList.add('active');
  currentSlide = n;
}

document.querySelector('.prev').addEventListener('click', () => {
  let prevSlide = currentSlide - 1;
  if (prevSlide < 0) {
    prevSlide = slides.length - 1;
  }
  showSlide(prevSlide);
});

document.querySelector('.next').addEventListener('click', () => {
  let nextSlide = currentSlide + 1;
  if (nextSlide >= slides.length) {
    nextSlide = 0;
  }
  showSlide(nextSlide);
});

showSlide(0);

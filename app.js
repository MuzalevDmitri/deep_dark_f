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



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }




  // Получаем кнопку открытия всплывающего окна
var openModalBtn = document.getElementById("openModalBtn");

// Получаем всплывающее окно
var modal = document.getElementById("myModal");

// Получаем кнопку закрытия всплывающего окна
var closeModalBtn = document.getElementById("closeModalBtn");

// Добавляем обработчик события для кнопки открытия всплывающего окна
openModalBtn.onclick = function() {
  modal.style.display = "block";
};

// Добавляем обработчик события для кнопки закрытия всплывающего окна
closeModalBtn.onclick = function() {
  modal.style.display = "none";
};

// Добавляем обработчик события для закрытия всплывающего окна при клике вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


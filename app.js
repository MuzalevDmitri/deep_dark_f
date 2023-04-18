const {
    renderSlot
} = require("@vue/runtime-core")

let menuHover = document.querySelector('.menu-hover')
let menu = document.querySelector('.menu')
let blockSlide = document.querySelector('.block-slide')
menu.addEventListener('click', tglMenu)

function tglMenu() {
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



window.onscroll = function () {
    scrollFunction()
};

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
openModalBtn.onclick = function () {
    modal.style.display = "block";
};

// Добавляем обработчик события для кнопки закрытия всплывающего окна
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

// Добавляем обработчик события для закрытия всплывающего окна при клике вне его области
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



// Получить все кнопки для раскрытия списков
const toggles = document.querySelectorAll('.toggle');

// Добавить обработчик события для каждой кнопки
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Получить список, который нужно отобразить или скрыть
        const sublist = toggle.nextElementSibling;

        // Переключить класс "active", чтобы показать или скрыть список
        sublist.classList.toggle('active');
    });
});








let todoList = [];

function addTodo() {
    let todoInput = document.getElementById("todoInput");
    let todoListElement = document.getElementById("todoList");

    if (todoInput.value !== "") {
        let todo = {
            id: todoList.length + 1,
            task: todoInput.value
        };

        todoList.push(todo);
        todoInput.value = "";

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(todo.task));
        todoListElement.appendChild(li);
    }
}

///preloader



function startGame() {

    let but = document.querySelector('.game-btn').style.display = 'none'

    //game

    let pole = document.querySelector('.game')
    let block = document.querySelector('.game-block')



    let counter = 0;

    block.addEventListener('click', GoGame)

    function GoGame() {

        // let min = 0
        // let max = 1000

        let dx = Math.floor(Math.random() * (830 - 1 + 1)) + 1;
        let dy = Math.floor(Math.random() * (530 - 1 + 1)) + 1;
        counter += 1
        block.style.left = dx + 'px'
        block.style.top = dy + 'px'
        console.log(counter)

    }


    setTimeout(() => {
        endGame()
    }, 10000)





    function endGame() {
        let end = document.querySelector('.end').style.display = 'block'
        let res = document.querySelector('.result')
        let dis = document.querySelector('.result-d')
        let finish = ''

        res.innerHTML += counter
       


        if (counter < 5) {
            finish = 'лох пи**'
        }
        if (counter < 10) {
            finish = 'ну уже лучше'
        }

        if (counter < 15) {
            finish = 'а ты не плох'
        }

        dis.innerHTML += finish



        console.log(finish)




    }



}
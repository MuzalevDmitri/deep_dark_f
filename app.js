let menuHover = document.querySelector('.menu-hover')
let body = document.querySelector('.body')
let menu = document.querySelector('.menu')
menu.addEventListener('click', tglMenu)
function tglMenu(){
    menuHover.classList.toggle('addMenu')
    body.classList.toggle('bodyadd')

}
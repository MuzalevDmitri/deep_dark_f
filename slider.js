let btnP = document.querySelector('.btnpre')
let btnN = document.querySelector('.btnnex')
let thisimg = document.getElementById('thisimg')

const imgArray = [
    'https://vignette.wikia.nocookie.net/5df42e00-8cab-492c-9a17-559d7b25c637/scale-to-width-down/1200',
    'https://images3.imgbox.com/76/7d/5yEX0wdl_o.jpg',
    'https://i.pinimg.com/originals/5c/48/fc/5c48fc38ad0d1bc3a9579b56647f6ec2.jpg',
    'http://images2.fanpop.com/images/photos/4900000/Pinocchio-pinocchio-4979486-960-720.jpg'
]

let correntThisImg = 0


thisimg.src = imgArray[correntThisImg];


btnN.addEventListener('click', function () {
    correntThisImg++
    if (correntThisImg === imgArray.length) {
        correntThisImg = 0
    }
    thisimg.src = imgArray[correntThisImg];


})

btnP.addEventListener('click', function () {
    correntThisImg--
    if (correntThisImg < 0) {
        correntThisImg = imgArray.length - 1
    }
    thisimg.src = imgArray[correntThisImg];


})
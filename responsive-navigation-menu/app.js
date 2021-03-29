let menuButton = document.getElementById('js-navbar');
let menu =  document.getElementById('js-menu');
let list = document.querySelector('.main-nav li')

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active')
    menuButton.classList.toggle('toggle')
    
})
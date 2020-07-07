let menuButton = document.getElementById('js-navbar');
let menu = document.getElementById('js-menu');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

//control the mobile navigation

const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.menu-btn')
const closeMenu = document.querySelector('.close-btn')

openMenu.addEventListener('click', () => {
    menu.classList.add('active')
})

closeMenu.addEventListener('click', () => {
    // header.classList.remove('sticky')
    menu.classList.remove('active')
})
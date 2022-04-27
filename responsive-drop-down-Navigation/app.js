const openNavMenu = document.querySelector('.open-nav-menu');
const closeNavMenu = document.querySelector('.close-nav-menu')
const menuOverlay = document.querySelector('.menu-overlay')

const navMenu = document.querySelector('.nav-menu')
const mobileWidth = 991

openNavMenu.addEventListener('click', toggleNav)
closeNavMenu.addEventListener('click', toggleNav)

function toggleNav() {
    navMenu.classList.toggle('open')
    menuOverlay.classList.toggle('active')
}

navMenu.addEventListener('click', (e) => {
    if (event.target.hasAttribute('data-toggle') &&
        window.innerWidth <= mobileWidth) {
        const menuItemHasChildren = event.target.parentElement;
        //if menu is expanded collapse it 

        if (menuItemHasChildren.classList.contains('active')) {
            collapseSubMenu()
        }
        else
            //collapse existing expanded menuItemHas Children
            if (navMenu.querySelector('.menu-item-has-children.active')) {
                collapseSubMenu()
            }
        //expanded new MenuItemHasChildren
        menuItemHasChildren.classList.add('active')
        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";


    }




})

function collapseSubMenu() {
    navMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style')

        .navMenu.querySelector('.menu-item-has-children.active').classList.remove('active')
}


function resizeFix() {
    //if navMenu is open close it

    if (navMenu.classList.contains('open')) {
        toggleNav()
    }
    // MenuItemHasChildren expanded close it 
    if (navMenu.querySelector('.menu-item-has-children.active')) {
        collapseSubMenu()
    }
}

window.addEventListener('resize', function () {
    if (this.innerWidth > mobileWidth) {
        resizeFix()
    }
})
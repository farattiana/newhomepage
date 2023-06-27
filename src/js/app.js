//Mobile Menu
const BurgerMenu = document.getElementById('burger-menu');
const BurgerClose = document.getElementById('burger-close');
const mobileNavbar = document.querySelector('.hide');
const mobilelinks = document.querySelectorAll('.mobile-link-item');

let darkfoiled = document.getElementById('darkfoiled');
    darkfoiled.style.display='none';

BurgerMenu.addEventListener('click', () => {
    mobileNavbar.style.left='30%';
    darkfoiled.style.display='block';
})
BurgerClose.addEventListener('click', () => {
    mobileNavbar.style.left='100%';
    darkfoiled.style.display='none';
})
mobilelinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavbar.classList.remove('is-active')
    })
})

window.addEventListener('load', function () {
    var loader = document.querySelector('.loader');
    loader.style.display = 'none';
});

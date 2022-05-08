
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

function showMenu() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

burger.addEventListener('click', showMenu);
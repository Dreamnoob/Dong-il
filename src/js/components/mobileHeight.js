function mobileHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

mobileHeight();

window.addEventListener('resize', mobileHeight);
const swiper = new Swiper('.mySwiper', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".slider__arrow--next",
        prevEl: ".slider__arrow--prev",
    },
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true
});
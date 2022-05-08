const page = document.querySelector('.page');

let scrollPosition;

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    page.classList.add("scroll-hide");
    page.style.paddingRight = scrollWidth;
    page.scroll(0, scrollPosition);
};

const showScroll = () => {
    page.style.paddingRight = '';
    page.classList.remove("scroll-hide");
    window.scroll(0, scrollPosition);
};

// Get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const getScrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return getScrollbarWidth;
};
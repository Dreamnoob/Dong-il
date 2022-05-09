function initNavHover() {
    const navLinks = document.querySelectorAll(".nav__link");

    // cursorHoverLink(navLinks);

    if (navLinks.length != 0) {
        navLinks.forEach(item => {
            item.addEventListener("mouseover", function () {
                const self = this;
                let windowWidth = window.innerWidth;

                navLinks.forEach(item => {
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                        console.log("телефон");
                    } else if(item != self && windowWidth >= 941) {
                        item.classList.add('light');
                    }
                });
            });

            item.addEventListener("mouseout", function () {
                navLinks.forEach(item => {
                    item.classList.remove('light');
                });
            });
        });
    }
}


initNavHover();
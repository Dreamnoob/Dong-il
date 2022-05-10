gsap.registerPlugin(DrawSVGPlugin, SplitText);

function initPreloader() {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "flex";

    var tl = gsap.timeline();

    var tl = new TimelineMax({
            repeat: 0
        }),
        text = $(".preloader__text-top"),
        split = new SplitText(text, {
            type: "chars",
            position: "absolute"
        }),
        rough = RoughEase.ease.config({
            strength: 2,
            clamp: true
        }),
        i;

    tl.set(text, {
        autoAlpha: 1
    });



    for (i = 0; i < split.chars.length; i++) {
        tl.fromTo(split.chars[i], 2.4, {
            transformOrigin: "center -160px",
            z: 0.1,
            rotation: ((Math.random() < 0.5) ? 90 : -90)
        }, {
            rotation: 0,
            ease: Elastic.easeOut
        }, 0.3 + i * 0.56);
        tl.to(split.chars[i], 0.6, {
            y: 96,
            ease: Bounce.easeOut
        }, 3.4 + Math.random() * 2.6);
        tl.to(split.chars[i], 1.6, {
            autoAlpha: 0,
            ease: rough
        }, 9.5 + Math.random());
    }

    var tl2 = new TimelineMax({
            repeat: 0
        }),
        text = $(".preloader__text-bottom"),
        split = new SplitText(text, {
            type: "chars",
            position: "absolute"
        }),
        rough = RoughEase.ease.config({
            strength: 2,
            clamp: true
        }),
        i;

    tl2.set(text, {
        autoAlpha: 1
    });

    for (i = 0; i < split.chars.length; i++) {
        tl2.fromTo(split.chars[i], 2.4, {
            transformOrigin: "center -160px",
            z: 0.1,
            rotation: ((Math.random() < 0.5) ? 90 : -90)
        }, {
            rotation: 0,
            ease: Elastic.easeOut
        }, 0.3 + i * 0.56);
        tl2.to(split.chars[i], 1.4, {
            y: 96,
            ease: Bounce.easeOut
        }, 3.4 + Math.random() * 2);
        tl2.to(split.chars[i], 1, {
            autoAlpha: 0,
            ease: rough
        }, 9.5 + Math.random());
    }

    function loaderAnim(time) {
        const step = 1;
        const progressProcent = document.querySelector(".progress-bar__procent");
        const progressLine = document.querySelector(".progress-bar__line");

        function progressBarAmin() {
            let n = 0;
            let t = Math.round(time / 100);
            if (progressProcent && progressLine) {
                let interval = setInterval(() => {
                    n = n + step;
                    if (n == 100) {
                        clearInterval(interval);
                    }
                    progressProcent.innerHTML = `${n}%`;
                    progressLine.style.width = `${n}%`;
                }, t);
            }
        }

        function yearsAnim() {
            const currentYear = new Date().getFullYear();
            const loaderYear = document.querySelector(".loader__year");

            if (loaderYear) {
                const originalYear = Number(loaderYear.textContent);
                const allYears = currentYear - originalYear;
                let n = 0;
                let t = Math.round(time / allYears);
                let interval = setInterval(() => {
                    n = n + step;
                    if (n == allYears) {
                        clearInterval(interval);
                    }
                    loaderYear.innerHTML = `${originalYear + n}`;
                }, t);
            }
        }

        progressBarAmin();
        yearsAnim();
    }

    loaderAnim(11000);

    setTimeout(() => {
        preloader.classList.add("hide");
        initIntroAnim();
    }, 11800);
}

function initIntroAnim() {
    const childSplit = new SplitText("#quote", {
        type: "lines",
        linesClass: "split"
    });
    
    gsap.from(childSplit.lines, {
        delay: 0.4,
        opacity: 0,
        duration: 0.6,
        yPercent: 100,
        rotateX: 90,
        ease: "none",
        stagger: 0.1
    });
    
    const tl1 = gsap.timeline();
    tl1.from(".banner__btn-top", {
        delay: 0.4,
        duration: 0.6,
        opacity: 0,
        // yPercent: 100,
        scale: 0,
        ease: "none",
    });
}

if (sessionStorage.getItem("doNotShow") != "true") {
    initPreloader();

    sessionStorage.setItem("doNotShow", true);
} else {
    initIntroAnim();
}
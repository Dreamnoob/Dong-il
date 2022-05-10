gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".page" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".page", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".page").style.transform ? "transform" : "fixed"
});

ScrollTrigger.defaults({
    scroller: ".page",
});

function aboutSecAnim() {
    let tl1 = gsap.timeline();

    tl1.from(".about__title", {
        opacity: 0,
        duration: 0.6,
        yPercent: 100,
        rotateX: 90,
        ease: "none",
    });

    ScrollTrigger.create({
        animation: tl1,
        trigger: ".about",
        start: "top bottom",
        // scrub: true,
    });

    let tl2 = gsap.timeline();

    const childSplit = new SplitText(".about__text", {
        type: "lines",
    });

    tl2.from(childSplit.lines, {
        opacity: 0,
        duration: 0.6,
        yPercent: 100,
        rotateX: 90,
        ease: "none",
        stagger: 0.1
    });

    ScrollTrigger.create({
        animation: tl2,
        trigger: ".about",
        start: "top bottom",
        // scrub: true,
    });
}

aboutSecAnim();

function historySecAnim() {
    const tl1 = gsap.timeline().fromTo(".history", {
        opacity: 0,
    }, {
        opacity: 1
    });

    ScrollTrigger.create({
        animation: tl1,
        trigger: ".history",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
    });

    let tl2 = gsap.timeline();

    tl2.from(".history__title", {
        delay: 0.4,
        opacity: 0,
        duration: 0.6,
        yPercent: 100,
        rotateX: 90,
        ease: "none",
    });

    ScrollTrigger.create({
        animation: tl2,
        trigger: ".history",
        start: "top bottom",
        // scrub: true,
    });
}


historySecAnim();
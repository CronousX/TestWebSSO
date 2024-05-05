
// Scroll Effects

gsap.to("#h-bg",{
    scrollTrigger : {
      scrub: true
    },
    y: 1000,
});
gsap.to("#h-t",{
    scrollTrigger : {
        scrub: true
    },
    y: 1800,
});
gsap.to("#a-t-r",{
    scrollTrigger : {
      scrub: 1
    },
    x: 1000,
});
gsap.to("#a-t-l",{
    scrollTrigger : {
      scrub: 1
    },
    x: -1000,
});
  
gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: function () {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
});

gsap.utils.toArray(".revealScale").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: function () {
            gsap.fromTo(
                elem,
                { scale: 0.5, autoAlpha: 0 },
                {
                    duration: 1.25,
                    scale: 1,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
});
  
gsap.utils.toArray(".revealAbNav").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: function () {
            gsap.fromTo(
                elem,
                { x: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    x: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 1, overwrite: "auto" });
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
});
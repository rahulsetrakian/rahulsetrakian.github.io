
// HORIZONTAL SCROLL

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".pt-container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".pt-container").offsetWidth,
    onEnter: () => {
      gsap.to(".container", {
        maxWidth: "auto",
        duration: 0.5,
        ease: "power4.inOut"
      });
      gsap.set(".navbar", { display: "none" });
    },
    onLeaveBack: () => {
      gsap.to(".container", {
        maxWidth: "75rem",
        duration: 0.5,
        ease: "power4.inOut"
      });
      gsap.set(".navbar", { display: "flex" });
    }
  }
});

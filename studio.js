window.onload = function () {
  // Automatically show the popup bar when the page loads
  gsap.from(".tagep1", {
    y: 100,
    duration: 1,
    ease: "bounce.out",
  });
  gsap.from(".tagep2", {
    y: 100,
    duration: 1.5,
    ease: "bounce.out",
  });
  gsap.from(".DISCOVER", {
    y: 50,
    duration: 1,
    ease: "bounce.out",
  });
};
gsap.to(".tagep1", {
  y: 50,
  opacity: 0,
  duration: 5,
  scale: 0.3,
  // stagger: 0.8,
  scrollTrigger: {
    trigger: ".tagep1",
    scroller: "body",
    // markers: true,
    start: "top 10%",
    end: "top 10%",
    scrub: 1,
  },
});
gsap.to(".tagep2", {
  y: 50,
  opacity: 0,
  duration: 3,
  scale: 0.3,
  // stagger: 0.8,
  scrollTrigger: {
    trigger: ".tagep2",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 5%",
    scrub: 1,
  },
});
gsap.to(".DISCOVER", {
  y: 50,
  opacity: 0,
  duration: 1,
  scale: 0.3,
  // stagger: 0.8,
  scrollTrigger: {
    trigger: ".DISCOVER",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 15%",
    scrub: 0.5,
  },
});
gsap.from(".file1", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  scale: 0.3,
  // stagger: 0.8,
  scrollTrigger: {
    trigger: ".file1",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
  },
});
gsap.from(".slide3-details", {
  y: 50,
  opacity: 0,
  duration: 2,
  scale: 0.3,
  // stagger: 0.8,
  scrollTrigger: {
    trigger: ".slide3-details",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
});

let wheel = document.querySelector(".rolling .wheel"),
  numLines = 12,
  radius = numLines * 10,
  angle = 360 / numLines,
  origin = `50% 50% -${radius}px`;

gsap.set(wheel, { transformOrigin: "50% 50%" });
gsap.set(wheel.querySelectorAll(".text"), {
  z: radius,
  rotationX: (index) => angle * index,
  transformOrigin: origin,
});

gsap.to(wheel, {
  rotationX: 360,
  duration: 10,
  ease: "none",
  transformOrigin: "50% 50%",
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=3000px",
    markers: true,
    scrub: true,
    pin: true,
    ease: "none",
  },
});

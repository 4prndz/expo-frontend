const heroTitle = document.querySelectorAll(".hero-title > h1");
const heroFrames = document.querySelectorAll(".hero-gallery-frame");
const heroFrameFigure = document.querySelectorAll(".hero-gallery-frame-figure");
const heroFrameImage = document.querySelectorAll(".hero-gallery-frame-image");

const initHero = () => {
  gsap.set(heroTitle, { y: "-100%" });
  gsap.set([heroFrames, heroFrameFigure, heroFrameImage], { height: 0 });

  showHero();
};

const showHero = () => {
  gsap
    .timeline()
    .to(
      heroTitle,
      {
        duration: 1.8,
        y: 0,
        ease: "expo.inOut",
        stagger: 0.025,
      },
      0
    )
    .to(
      heroFrames,
      {
        duration: 1.8,
        height: "300",
        ease: "expo.inOut",
        stagger: 0.025,

      },
      0
    )
    .to(
      heroFrameImage,
      {
        duration: 1.0,
        height: "300",
        ease: "expo.inOut",
        stagger: 0.025,

      },
      0
    )
    .to(
      heroFrameFigure,
      {
        duration: 1.5,
        height: "300",
        ease: "expo.inOut",
        stagger: 0.025,
      },
      0
    );

};

window.onload = () => {
  initHero();
};

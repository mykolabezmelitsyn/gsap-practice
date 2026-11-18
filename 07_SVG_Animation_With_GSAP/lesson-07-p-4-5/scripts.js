import {gsap, GSDevTools} from "../../src/libs/gsap.js";

gsap.set("#demo1", {
    opacity:
      1
  }
)
const tl = gsap.timeline({})
  .fromTo("#light", {
    x: -450
  }, {
    x: 300,
    duration: 3
  })
  .to("#light", {
    x: 0,
    ease: "power1.inOut",
    duration: 3
  })
  .to("#light", {
    scale: 3,
    transformOrigin: "50% 50%",
    duration: 1.2
  }, "-=0.8")

GSDevTools.create({animation: tl})

import {gsap, GSDevTools} from "../src/libs/gsap.js";

const tl = gsap.timeline({
  defaults: {
    ease: "none"
  }
})

  .to(".ball", {
    y: 200,
    duration: 1
  })
  .to(".wire", {
    attr: {
      d: "M 100 200 C 100 200 133 300 200 300 C 266 300 300 200 301 200"
    }
  }, 0.5)

const master = gsap.timeline({repeat: -1})

master.add(
  tl.tweenTo(1, {
    ease: "power2.inOut",
    duration: 1,
    repeat: 1,
    yoyo: true
  })
)
  .to(".wire", {
    attr: {
      d: "M 100 200 C 100 200 133 184.4429 200 184.4429 C 266 184.4429 300 200 301 200"
    },
    duration: 0.1,
    repeat: 1,
    yoyo: true
  }, 1.5)


GSDevTools.create({animation: master})
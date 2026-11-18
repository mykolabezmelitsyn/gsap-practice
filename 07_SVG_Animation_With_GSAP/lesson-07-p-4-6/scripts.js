import {gsap, GSDevTools} from "../../src/libs/gsap.js";

const tl = gsap.timeline()
  .to("#mask", {
    xPercent: 100,
    duration: 2,
    yoyo: true,
    repeat: 1
  })

GSDevTools.create({animation: tl})

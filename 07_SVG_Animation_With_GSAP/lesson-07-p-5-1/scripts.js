import {gsap,GSDevTools} from "../../src/libs/gsap.js";

const tl = gsap.timeline()

tl.to("feTurbulence", {
  duration:3,
  repeat:1,
  yoyo:true,
  ease:"none",
  attr:{
    baseFrequency:0.03
  }
})
tl.to("feDisplacementMap", {
  duration:3,
  repeat:1,
  yoyo:true,
  ease:"none",
  attr:{
    scale:15
  }
}, 0)


GSDevTools.create({animation:tl})

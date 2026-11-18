import {gsap, GSDevTools} from "../../src/libs/gsap.js";

const t = gsap.fromTo("#maskPath", {
  drawSVG:0
}, {
  drawSVG:true,
  duration:2,
  ease:"none"
})
GSDevTools.create({animation:t})


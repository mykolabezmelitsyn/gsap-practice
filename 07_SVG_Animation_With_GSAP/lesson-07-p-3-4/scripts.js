import {gsap, GSDevTools} from "../../src/libs/gsap.js";



const tl = gsap.timeline()

tl.fromTo("#draw", {
  drawSVG:"550 550"
  },
  {
    drawSVG: "951 150",
    duration: 2
  })


GSDevTools.create({animation:tl})


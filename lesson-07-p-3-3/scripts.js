import {gsap, GSDevTools} from "../src/libs/gsap.js";

gsap.set("#plane", {opacity:1}) // prevent fouc
gsap.set("#plane path", {drawSVG:0})

const tl = gsap.timeline({id:"SVG Stroke"})
  .to("#plane path", {
    drawSVG: "0% 100%",
    duration: 1,
    stagger: 0.01
  })

GSDevTools.create({animation:tl})

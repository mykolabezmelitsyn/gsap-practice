import {gsap, GSDevTools} from "../src/libs/gsap.js";

const tl = gsap.timeline()
  .from("#demo1 ellipse", {
    scale:0,
    transformOrigin:"50% 50%",
    ease:"back",
    duration:1
  })
  .from("#demo1 image", {
    duration:1.5,
    scale:1.5,
    transformOrigin:"50% 50%"
  }, 0)

GSDevTools.create({animation:tl})

gsap.set("#demo2 svg", {opacity:1})
const tl2 = gsap.timeline()
  .from("#demo2 clipPath rect", {
    scaleX:0,
    transformOrigin:"0% 0%",
    stagger:{
      each:0.1,
      from:"edges"
    }})

  .to("#demo2 clipPath rect", {
    scaleX:0,
    ease:"sine.inOut",
    duration:0.8,
    transformOrigin:"100% 50%",
    stagger:{
      each:0.05,
      from:"start",
      ease:"power1.in"
    }})

document.addEventListener("click", () => tl2.restart())
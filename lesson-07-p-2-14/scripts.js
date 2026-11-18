import {gsap, GSDevTools} from "../src/libs/gsap.js";


const tl = gsap.timeline()
tl.to("#myPath", {
  attr:{
    startOffset:750
  },
  duration:3,
  ease:"power1.in",
  repeat:1,
  yoyo:true,
  yoyoEase:true
})
  .to("#path-0", {
    opacity:0,
    duration:0.2
  }, "<50%")


GSDevTools.create({animation:tl})


import {gsap, GSDevTools} from "../../src/libs/gsap.js";

gsap.set("#demo1", {opacity:1})

const tl = gsap.timeline({})
  .from("#textMask", {
    xPercent:-100,
    duration:1
  })
  .from("text", {
    x:300,
    duration:1
  }, "<")
  .set("#textMask", {
    scaleX:-1,
    transformOrigin:"50% 50%"
  }, "+=1")
  .to("#textMask", {
    xPercent:100,
    duration:1
  })
  .to("text", {
    x:-50,
    duration:1
  }, "<")

GSDevTools.create({animation:tl})


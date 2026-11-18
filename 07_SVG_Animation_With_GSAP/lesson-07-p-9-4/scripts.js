import {gsap, ScrollTrigger, MorphSVGPlugin} from "../../src/libs/gsap.js";

gsap.set(".demoWrapper", {opacity: 1})
const tl = gsap.timeline()
  .from(".leaf1", {scale: 0, transformOrigin: "right bottom"})
  .from(".leaf2", {scale: 0, transformOrigin: "left bottom"}, 0.1)
  .from(".stem", {drawSVG: 0})
  .from([".center", ".petals"], {ease: "back", scale: 0, transformOrigin: "50% 50%", stagger: 0.1})

ScrollTrigger.create({
  trigger: ".demoWrapper",
  animation: tl,
  markers: true,
  start: "50% 50%",// "triggerElement middleOfThePage"
  end: "bottom 50%",
  scrub: 1,
  pin: true
})


//GSDevTools.create({animation:tl})
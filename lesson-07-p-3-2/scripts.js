import {gsap, GSDevTools} from "../src/libs/gsap.js";

const tl = gsap.timeline()
  .to("line", {strokeDashoffset: -300, duration: 1})
  .to("rect", {strokeDashoffset: 0, duration: 2})


const curve = document.querySelector("#curve")
let length = curve.getTotalLength()
console.log(length)

gsap.set(curve, {
  strokeDasharray:length,
  strokeDashoffset:length
})


const tl2 = gsap.timeline()
  .to(curve, {strokeDashoffset:0, duration:1})
  .to(curve, {strokeDashoffset:-length, duration:1}, "+=1")



gsap.config({trialWarn:false})


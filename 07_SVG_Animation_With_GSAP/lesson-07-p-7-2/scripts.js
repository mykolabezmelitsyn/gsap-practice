import {gsap, GSDevTools, MorphSVGPlugin} from "../../src/libs/gsap.js";

//timeline for the first morph
const tl1 = gsap.timeline({defaults:{
    ease:"none"
  }})

  .to("#start1", {morphSVG:"#middle",  duration:0.8})
  .to("#start1", {morphSVG:"#end",  duration:0.5})

const tl2 = gsap.timeline({defaults:{
    ease:"none"
  }})

  .to("#start2", {morphSVG:"#middle",  duration:0.6})
  .to("#start2", {morphSVG:"#end",  duration:0.4, ease:"power1"})

const main = gsap.timeline()
  .add(tl1)
  .add(tl2, 1.3)

GSDevTools.create({animation:main})
gsap.to(".gs-dev-tools", {y:2})
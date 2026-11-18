import {gsap, GSDevTools, MorphSVGPlugin} from "../../src/libs/gsap.js";

const morph = gsap.to("#butterfly",{
  morphSVG:"#bat",
  fill:"#4bd",
  id:"bat morph",
  duration: 3
})

GSDevTools.create({animation:morph})

const tl = gsap.timeline({
  defaults:{
    duration:1,
    ease:"elastic.out"
  }
})

  .to("#line0", {morphSVG:"#line1"})
  .to("#line0", {morphSVG:"#line2"})
  .to("#line0", {morphSVG:"#line3"})
  .to("#line0", {morphSVG:"#line0"})

GSDevTools.create({animation:tl})

MorphSVGPlugin.convertToPath(".demo3 #square")
const morph2 = gsap.to(".demo3 #square",{
  morphSVG:"#arrow"
})

GSDevTools.create({animation:morph2})

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, polygon");

const tl2 = gsap
  .timeline({
    repeat: 20,
    repeatDelay: 0.5,
    delay: 0.5,
    yoyo: true,
    defaults: { ease: "power2.inOut" }
  })
  .to(".demo4 #triangle", { morphSVG: "#a" })
  .to(".demo4 #square", { morphSVG: "#b" })
  .to(".demo4 #circle", { morphSVG: "#c" });

gsap.set(".demo5 #morph", {opacity:1})
const lemonDarkFill = "#F7932A"
const lemonMidFill = "#FCC219"
const lemonLightFill = "#FFEBC9"

const appleStem = gsap.timeline({defaults:{ease:"power1.in"}})
  .to(".appleLeaf", {scale:0, transformOrigin:"0% 100%", duration:0.1}, 0)
  .to(".appleStemPath", {y:100, opacty:0, duration:0.15}, 0.05)
  .to(".appleStemShadow", {scale:0, transformOrigin:"50% 50%", duration:0.2, }, 0.05)


const morph3 = gsap.timeline({delay:0.1, defaults:{ease:"power1.inOut", duration:0.5}})
  .to(".appleDark", {morphSVG:".lemonDark", fill:lemonDarkFill})
  .to(".appleMid", {morphSVG:".lemonMid", fill:lemonMidFill}, 0)
  .to(".appleLight", {morphSVG:".lemonLight", fill:lemonLightFill}, 0)

const lemonStem = gsap.timeline()
  .from(".lemonStem", {scale:0, transformOrigin:"100% 100%", duration:0.1})
  .from(".lemonLeafClipAni", {y:-66, duration:0.2}, "-=0.05")

const main = gsap.timeline({id:"Fruit Morph"})
  .add(appleStem)
  .add(morph3, "-=0.35")
  .add(lemonStem, "-=0.2")

GSDevTools.create({animation:main})

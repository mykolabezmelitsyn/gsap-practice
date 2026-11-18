import {gsap, GSDevTools} from "../../src/libs/gsap.js";

const tl = gsap.timeline({})
  .from(".top", {scale:0, transformOrigin:"50% 50%"})
  .set(".side, .shadow", {opacity:1})
  .to(".barToAnimate", {y:-37, ease:"back"})
  .to(".shadow", {scaleY:3.2, ease:"back"}, "<")


GSDevTools.create({animation:tl})

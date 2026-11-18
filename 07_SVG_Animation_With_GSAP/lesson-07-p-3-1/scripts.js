import {gsap, GSDevTools} from "../../src/libs/gsap.js";


const tl = gsap.timeline()
  .to("line, rect", {
    strokeDashoffset: -40,
    repeat: -1,
    ease:"none"
  })

GSDevTools.create({animation:tl})



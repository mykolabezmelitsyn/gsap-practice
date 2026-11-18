import {gsap, GSDevTools} from "../../src/libs/gsap.js";

const animation = gsap.to(".arrow", {
  duration: 2,
  ease: "none",
  motionPath: {
    path: ".path",
    align: ".path",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    // start:0.5,
    // end:1.5
  }
})

GSDevTools.create({animation: animation})
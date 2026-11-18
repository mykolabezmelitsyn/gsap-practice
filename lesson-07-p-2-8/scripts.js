import {gsap, GSDevTools} from "../src/libs/gsap.js";

const tl = gsap.timeline()
tl.from("ellipse", {
    scale: 0,
    ease: "power2.inOut",
    transformOrigin: "50% 50%",
    duration: 1,
    stagger: 0.1
  }
)
  .from("#text path", {
    scale: 0,
    transformOrigin: "50% 50%",
    stagger: 0.05,
    ease: "back"
  }, "-=0.4")

GSDevTools.create()
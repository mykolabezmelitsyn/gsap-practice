import {gsap, GSDevTools} from "../src/libs/gsap.js";

const chars = gsap.utils.toArray("#text path")
const tl = gsap.timeline()
  //reveal text
  .from(chars, {
    opacity: 0,
    duration: 0.1,
    stagger: 0.05
  })
  .from(chars, {
    scale: 0.5,
    ease: "elastic",
    duration: 1.2,
    transformOrigin: "50% 50%",
    stagger: 0.05
  }, 0)

  //squash and jump
  .set(chars, {transformOrigin: "0% 100%"})
  .to(chars, {
    keyframes: {
      "20%": {scaleY: 0.2, y: 0},
      "50%": {scaleY: 1.3, y: -100, ease: "sine.out"},
      "80%": {scaleY: 1, y: 0, ease: "sine.in"},
      "82%": {scaleY: 0.5, y: 0, ease: "sine.out"},
      "100%": {scaleY: 1, y: 0, ease: "back(2)"},

    },
    duration: 1,
    stagger: 0.02
  })

  //skew and remove
  .to(chars, {
    skewX: 30,
    x: -20,
    duration: 0.3,
    ease: "power1.inOut"
  })
  .to(chars, {
    transformOrigin: "50% 50%",
    skewX: -30,
    scale: 1.5,
    x: "+=550",
    ease: "power1.in",
    duration: 0.25,
    stagger: {
      each: 0.02,
      from: "end"
    }
  })


GSDevTools.create({animation: tl})

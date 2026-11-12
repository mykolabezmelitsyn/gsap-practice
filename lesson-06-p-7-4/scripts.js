import {gsap} from "../src/libs/gsap.js";

var tl = gsap.timeline({repeat: -1});

function init() {
  tl.set("img, h1", {xPercent: -100})
    .to("img, h1", {
      duration:3,
      xPercent: 0,
      x: (index, target) => target.parentElement.offsetWidth / 2 + target.offsetWidth * 2,
      ease: "slow(0.6, 1.2)",
      stagger: 0.2
    })
    .from(
      "img, h1", {
        duration:3,
        scale:0,
        opacity: 0.5,
        ease: "slow(0.6, 0.6, true)",
        stagger: 0.2
      }, "<"
    )
}

window.addEventListener("load", function(event) {
  console.log("load")
  gsap.set("#demo", {autoAlpha:1})
  init();
});
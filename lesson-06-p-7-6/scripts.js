import {gsap} from "../src/libs/gsap.js";

let tween;

function init() {
  tween = gsap.from("h1", {
    duration: 0.3,
    ease: "rough({ template: power0.none, strength: 10, points: 50, taper: 'none', randomize: true, clamp:  true})",
    opacity: 0,
    scale: 0.9,
    rotation: -5,
    repeat: 1,
    yoyo: true
  })
}

document.getElementById("restart").addEventListener("click", () => tween.restart());

window.addEventListener("load", function (event) {
  gsap.set("#demo", {autoAlpha: 1})
  init(); //do stuff
});
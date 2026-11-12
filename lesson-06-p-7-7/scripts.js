import {gsap} from "../src/libs/gsap.js";

let tween;

function init() {
  tween = gsap.to("h1", {
    duration: 2.5,
    ease: "rough({ template: power0.none, strength: 20, points: 80, taper: 'in', randomize: false, clamp:  false})",
    x: 1,
    repeat: 1,
    yoyo: true
  });
}


document.getElementById("restart").addEventListener("click", () => tween.restart());

window.addEventListener("load", function (event) {
  gsap.set("#demo", {autoAlpha: 1})
  init(); //do stuff
});
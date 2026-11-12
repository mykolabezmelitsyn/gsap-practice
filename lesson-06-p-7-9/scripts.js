import {gsap} from "../src/libs/gsap.js";

gsap.set(".wrapper", {scale: 1})

let animation_1 = gsap.timeline()
let animation_2 = gsap.timeline()

animation_1.to(".img-santa", {
  x: -250 * 8,//250 - width of single slide, 8 = sum of slides-1
  duration: 1,
  ease: "steps(8)",
  repeat: -1
  }
).timeScale(1)

animation_2.to(".img-car", {
  x: -600 * 7,//229 - width of single slide, 8 = sum of slides-1
  duration: 4,
  ease: "steps(7)",
  }
).pause()

let progressSlider = document.querySelector("#progressSlider");
progressSlider.addEventListener("input", function () {
  console.log(this.value)
  animation_2.progress(this.value).pause();
});

//https://codepen.io/GreenSock/pen/PooWQdb?editors=0010


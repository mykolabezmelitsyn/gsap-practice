import {gsap, CustomEase} from "../src/libs/gsap.js";

const herman = document.querySelector("#herman")

CustomEase.create("myEase", "M0,0 C0.126,0.382 0.414,0.841 0.815,0.248 0.962,0.029 0.818,1.001 1,1 ");

let animation = gsap.to(herman, {
    duration: 1,
    rotation: -40,
    scale: 2,
    ease: "myEase"
  }
)

herman.addEventListener("click", () => animation.restart())


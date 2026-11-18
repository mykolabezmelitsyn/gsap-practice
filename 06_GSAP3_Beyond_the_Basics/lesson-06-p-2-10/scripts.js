import {gsap} from "../../src/libs/gsap.js";

let setScaleX = gsap.quickSetter(".box", "scaleX")
let setScaleY = gsap.quickSetter(".box", "scaleY")

let center = 300

demo.addEventListener("mousemove", function(e) {
  mouseX.textContent = e.offsetX
  let distance = Math.abs(center - e.offsetX)
  distanceX.textContent = distance

  distance = gsap.utils.mapRange(0, center, 4, 1, distance)
  setScaleX(distance)
  setScaleY(distance)
})



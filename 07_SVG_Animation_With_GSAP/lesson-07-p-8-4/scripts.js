import {gsap, GSDevTools, MorphSVGPlugin} from "../../src/libs/gsap.js";


const svg = document.getElementById("svg")
const ns = "http://www.w3.org/2000/svg"

svg.addEventListener("click", function(e) {
  let newCircle = document.createElementNS(ns, "circle")

  newCircle.setAttributeNS(null, "cx", e.offsetX)
  newCircle.setAttributeNS(null, "cy", e.offsetY)
  newCircle.setAttributeNS(null, "r", 50)
  newCircle.setAttributeNS(null, "stroke", "white")
  newCircle.setAttributeNS(null, "stroke-width", 4)
  svg.appendChild(newCircle)

  gsap.set(newCircle, {
    fill: `hsla(${"random(0, 360)"}, ${"random(50, 100)"}%, ${"random(25, 75)"}%, 0.8)`
  })

  gsap.fromTo(newCircle, {
    scale:0.5,
    transformOrigin:"50% 50%"
  }, {scale:1.5, ease:"back"})

})

clear.addEventListener("click", () => {
  document.querySelectorAll('circle')
    .forEach(circle => circle.remove());
})


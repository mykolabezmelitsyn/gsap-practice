import {gsap, GSDevTools, MorphSVGPlugin} from "../../src/libs/gsap.js";

const circle = document.getElementById("circle")
const svg = document.getElementById("svg")

svg.addEventListener("click", function(e) {
  let newCircle = circle.cloneNode()
  gsap.set(newCircle, {
    fill: `hsla(${"random(0, 360)"}, ${"random(50, 100)"}%, ${"random(25, 75)"}%, 0.8)`
  })
  newCircle.setAttribute("cx", e.offsetX)
  newCircle.setAttribute("cy", e.offsetY)
  newCircle.setAttribute("stroke", "white")
  newCircle.setAttribute("stroke-width", "4")
  svg.appendChild(newCircle)
  gsap.fromTo(newCircle, {
    scale:0.5,
    transformOrigin:"50% 50%"
  }, {
    scale:1.5,
    ease:"back"
  })
})

clear.addEventListener("click", () => {
  document.querySelectorAll('circle')
    .forEach(circle => circle.remove());
})


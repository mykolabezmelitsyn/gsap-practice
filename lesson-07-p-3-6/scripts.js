import {gsap, GSDevTools} from "../src/libs/gsap.js";

gsap.to(".demo", {opacity: 1})

const dots = gsap.utils.toArray(".demo ellipse")
const line = document.querySelector(".demo line")
gsap.set(line, {
  attr: {
    x1: 20,
    x2: 20
  }}
)

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    console.log(dot.getAttribute("cx"))
    let endX = dot.getAttribute("cx")
    let tl = gsap.timeline()
      .to(line, {
        attr: {
          x1: endX
        },
        duration: 0.3,
        ease: "sine"
      })
      .to(line, {
        attr: {
          x2: endX
        },
        ease: "elastic"
      }, "-=0.1")
  })
})

import {Draggable, GSDevTools, gsap} from "../../src/libs/gsap.js";

gsap.set("g rect, g ellipse, path", {fill:"#ff0095"})


/* Filters */
const blurFilter = document.querySelector("#blur")
const colorMatrix = document.querySelector("#colorMatrix")

/* sliders */
const inputBlur = document.querySelector("#input-blur")
const inputAlpha4 = document.querySelector("#input-alpha4")
const inputAlpha5 = document.querySelector("#input-alpha5")

/* matrix values */
const baseMatrix = "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0"
let alpha4 = 11
let alpha5 = -6


/* create new matrix based on values of sliders */
function updateMatrix() {
  let newMatrix = `${baseMatrix} ${alpha4} ${alpha5}`
  console.log(newMatrix)
  colorMatrix.setAttribute("values", newMatrix)
}


inputBlur.addEventListener("input", (e) => {
  blurFilter.setAttribute("stdDeviation", e.target.value)
  blurText.textContent=e.target.value
})

inputAlpha4.addEventListener("input", (e) => {
  alpha4 = e.target.value
  alpha4Text.textContent = alpha4
  updateMatrix()
})

inputAlpha5.addEventListener("input", (e) => {
  alpha5 = e.target.value
  alpha5Text.textContent = alpha5
  updateMatrix()

})


updateMatrix()

getFilter.addEventListener("click", ()=> {
  console.clear()
  console.log(goo)
  navigator.clipboard.writeText(theDefs.innerHTML);
})




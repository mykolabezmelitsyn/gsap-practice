import {gsap} from "../../src/libs/gsap.js";

const demo = document.querySelector(".demo")
const polyline = document.querySelector("polyline")
let firstClick = true

demo.addEventListener("click", function(e){
  let newX = e.offsetX
  let newY = e.offsetY
  let oldPoints

  if(firstClick){
    polyline.setAttribute("points", `${newX}, ${newY}`)
    firstClick = false
  } else {
    oldPoints = polyline.getAttribute("points")
    polyline.setAttribute("points", `${oldPoints}, ${newX}, ${newY}`)
  }
  gsap.set("circle", {x:newX, y:newY, scale:0, opacity:0, transformOrigin:'50% 50%'})
  gsap.to("circle", {scale:1, opacity:1, repeat:1, yoyo:true, duration:0.2})


})

clear.addEventListener("click", function(){
  polyline.setAttribute("points", "")
  firstClick = true
})

/*

	gsap.set("circle", {x:newX + 10, y:newY + 10, scale:0, opacity:0})
	gsap.to("circle", {opacity:0.9, scale:1, transformOrigin:"50% 50%", repeat:1, yoyo:true, duration:0.2})

*/
import {gsap, GSDevTools} from "../src/libs/gsap.js";

const myObject = {
  // x:100
}

function showValue() {
  output.textContent = myObject.x
}

showValue()

gsap.to(myObject, {
  x: 500,
  duration: 1,
  onUpdate:showValue
})

////////////////////////////////////////////////////////

const drawSet = gsap.quickSetter("path", "drawSVG");
const points = {
  start:0,
  end:0,
}

// in order to use slow ease be sure to load the GSAP EasePack
// https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js

const tl = gsap.timeline({
  onUpdate:drawLine,
  defaults:{
    duration:1.5,
    ease:"slow(0.3, 0.6)"
  }, repeat: -1},
)

tl.to(points, {
  end: 100
})
  .to(points, {
    start: 100
  }, 0.35)

function drawLine() {
  drawSet(`${points.start}% ${points.end}%`)
}

////////////////////////////////////////////////////////

var tl2 = gsap.timeline({ repeat: 5 });
var duration = 2;
function init() {
  tl2.fromTo("#demo2 h1",
    { scale: 0 },
    {
      duration:duration,
      scale: 6,
      ease: "slow(0.5, 0.8)",
      stagger: duration
    }
  )
    .from("#demo2 h1",
      {
        duration:duration,
        opacity:0,
        ease:"slow(0.5, 0.8, true)",
        stagger:duration
      }, "<");
}

window.addEventListener("load", function(event) {
  console.log("load");
  gsap.set("#demo2", {
    autoAlpha: 1
  });
  init();
});
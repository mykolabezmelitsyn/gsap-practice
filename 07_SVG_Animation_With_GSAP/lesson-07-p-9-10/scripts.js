import {gsap, GSDevTools, MotionPathPlugin} from "../../src/libs/gsap.js";

gsap.set("#demo", {opacity: 1})

const tl = gsap.timeline({defaults: {duration: 2}})

//since recording the video it seems that the path that is masked can't be used as the motionPath. This example uses the dashed path.

tl.to("#plane, #viewbox", {
  motionPath: {
    path: "#path-1",
    align: "#path-1",
    alignOrigin: [0.5, 0.5]
  }, onUpdate: updateViewbox
})

  .from("#motionPath", {drawSVG: 0}, 0)

  .to("#demo", {duration: 1, attr: {viewBox: "0 0 400 200"}})

const viewBox = document.querySelector("#viewbox")

const boxWidth = viewBox.getBBox().width
const boxHeight = viewBox.getBBox().height

function updateViewbox() {
  let x = gsap.getProperty(viewBox, "x")
  let y = gsap.getProperty(viewBox, "y")
  console.log(`${x} ${y} ${boxWidth} ${boxHeight}`)
  gsap.set("#demo", {attr: {viewBox: `${x} ${y} ${boxWidth} ${boxHeight}`}})
}

updateViewbox()

GSDevTools.create({animation: tl})


gsap.config({trialWarn: false})

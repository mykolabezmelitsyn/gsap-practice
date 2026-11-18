import {gsap, GSDevTools} from "../src/libs/gsap.js";

const drawShort = gsap.quickSetter("#short path", "drawSVG");
const drawTall = gsap.quickSetter("#tall path", "drawSVG");

let pointsShort = {
  start: 0,
  end: 0,
}

let pointsTall = {
  start: 0,
  end: 0,
}

function openHole(hole) {
  let tl = gsap.timeline()
  gsap.set(hole, {
    scale: 0,
    transformOrigin: "50% 50%"
  })
  tl.to(hole, {
    scale: 1,
    ease: "back"
  })
  tl.to(hole, {
    scale: 0,
    duration: 0.3,
    ease: "power2.in"
  }, "+=0.1")
  return tl
}

const tlShort = gsap.timeline({
  onUpdate: updateShort,
  defaults: {
    duration: 0.8,
    ease: "slow(0.3, 0.5)"
  }}
)
  .add(openHole("#hole1"))
  .to(pointsShort, {end: 100}, 0.1)
  .to(pointsShort, {start: 100}, 0.3)
  .add(openHole("#hole2"), "-=0.4")


const tlTall = gsap.timeline({
  onUpdate: updateTall,
  defaults: {
    duration: 1.2,
    ease: "slow(0.3, 0.7)"
  }}
)
  .add(openHole("#hole3"))
  .to(pointsTall, {end: 100}, 0.1)
  .to(pointsTall, {start: 100}, 0.2)
  .add(openHole("#hole4"), "-=0.4")

const main = gsap.timeline()
main.add(tlShort)
main.add(tlTall)

function updateShort() {
  drawShort(`${pointsShort.start}% ${pointsShort.end}%`)
}

function updateTall() {
  drawTall(`${pointsTall.start}% ${pointsTall.end}%`)
}

updateTall()
updateShort()

GSDevTools.create({animation: main})
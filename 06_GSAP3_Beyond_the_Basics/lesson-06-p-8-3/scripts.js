import {gsap, SplitText, GSDevTools} from "../../src/libs/gsap.js";

//1
const rotateTl = gsap.timeline({defaults: {ease: "power1"}})

// edit these variables
// for best results [each] should be lesson than [duration]
const duration = 0.2
const each = 0.1
const rotationY = 45
const rotationX = 0
const z = 50
const endColor = "#fb7ae0"
const perspective = 280


const rotateSplit = SplitText.create("#rotate", {type: "chars"})
gsap.set("#rotate > div", {transformPerspective: perspective})

rotateTl.to(rotateSplit.chars, {
  z: z,
  duration: duration,
  color: endColor,
  stagger: {
    each: each,
    repeat: 1,
    yoyo: true
  }
})

rotateTl.to(rotateSplit.chars, {
  rotationY: rotationY,
  rotationX: rotationX,
  duration: duration / 2,
  stagger: {
    each: each,
    repeat: 1,
    yoyo: true
  }
}, 0)

rotateTl.to(rotateSplit.chars, {
  rotationY: -rotationY, rotationX: -rotationX, duration: duration / 2,
  stagger: {
    each: each,
    repeat: 1,
    yoyo: true
  }
}, duration)

GSDevTools.create({animation: rotateTl})

//2
gsap.registerEffect({
  name: "bulgeShine",
  extendTimeline: true,
  defaults: {
    duration: 0.2,
    each: 0.1,
    rotationY: 35,
    rotationX: 0,
    z: 80,
    perspective: 180,
    color: "white"
  },
  effect: (targets, config) => {

    gsap.set(targets, {transformPerspective: config.perspective})
    let tl = gsap.timeline()
    tl.to(targets, {
      z: config.z,
      duration:
      config.duration,
      color: config.color,
      stagger: {
        each: config.each,
        repeat: 1,
        yoyo: true
      }
    })

    tl.to(targets, {
      rotationY: config.rotationY, rotationX: config.rotationX, duration: config.duration / 2,
      stagger: {
        each: config.each,
        repeat: 1,
        yoyo: true
      }
    }, 0)

    tl.to(targets, {
      rotationY: -config.rotationY, rotationX: -config.rotationX, duration: config.duration / 2,
      stagger: {
        each: config.each,
        repeat: 1,
        yoyo: true
      }
    }, config.duration)
    return tl
  }
});

let split1 = SplitText.create("#h1", {type: "chars"}).chars
let split2 = SplitText.create("#h2", {type: "chars"}).chars
let split3 = SplitText.create("#h3", {type: "chars"}).chars

const t = gsap.timeline()
t.bulgeShine(split1, {color: "#fb7ae0"})
t.bulgeShine(split2, {color: "#58c5ff", duration: 0.2, each: 0.04, z: 100, rotationX: 35})
t.bulgeShine(split3, {color: "#ffdff8", duration: 0.25, each: 0.07, z: 80, perspective: 300})

GSDevTools.create({animation: t})

gsap.config({trialWarn: false})

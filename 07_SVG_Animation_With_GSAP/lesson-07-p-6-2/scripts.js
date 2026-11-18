import {gsap, GSDevTools} from "../../src/libs/gsap.js";

gsap.set(".demoWrapper", { opacity:1})
const circles = gsap.utils.toArray(".circles ellipse")
const tl = gsap.timeline({repeat:20})

// *** secret sauce ***
// *** evenly disperse between 0 and 1 for each iteration ***
for (let i = 0; i < 25; i++){
  console.log(i, i/25)
}

circles.forEach((circle, i) => {
  let start = i/circles.length // secret sauce for circles
  console.log(start)
  tl.to(circle, {
    motionPath: {
      path: ".path",
      align: ".path",
      alignOrigin: [0.5, 0.5],
      start:start,
      end:start + 1
    }, ease:"none", duration:3
  }, 0)

})

GSDevTools.create({animation:tl})
gsap.config({trialWarn: false})


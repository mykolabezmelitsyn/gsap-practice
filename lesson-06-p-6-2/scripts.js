import { gsap, SplitText, GSDevTools } from "../src/libs/gsap.js";


gsap.config({trialWarn:false})
let elements = document.querySelectorAll("li")
// let effectsTimeline = gsap.timeline({repeat: -1})
let effectsTimeline = gsap.timeline({})

gsap.registerEffect({
  name:"slideIn",
  extendTimeline:true,
  defaults:{
    y:0,
    x:0,
    duration:1,
    ease:"power1"
  },
  effect: (targets, config) => {

    let tl = gsap.timeline()
    tl.from(targets, {duration:config.duration, ease:config.ease, x:config.x, y:config.y, stagger:{
        each:0.03,
        ease:"power1"
      }})
    tl.from(targets, {duration:config.duration, opacity:0, ease:"none", stagger:{
        each:0.03,
        ease:"power2"
      }
    }, 0)
    return tl
  }
})

gsap.registerEffect({
  name:"slideOut",
  extendTimeline:true,
  defaults:{
    x:0,
    y:0,
    duration:0.5,
    ease:"power1.in"
  },
  effect: (targets, config) => {

    let tl = gsap.timeline()
    tl.to(targets, {duration:config.duration, x:config.x, y:config.y, ease:"power1.in", stagger:{
        each:0.01,
        ease:"power1"
      }})
    tl.to(targets, {duration:config.duration, opacity:0, ease:"none", stagger:{
        each:0.01,
        ease:"power2"
      }
    }, 0)
    return tl
  }
})


gsap.registerEffect({
  name:"twistIn",
  extendTimeline:true,
  defaults:{
    duration:1,
    rotationX:0,
    rotationY:0,
    transformOrigin:"50% 50%",
    ease:"back",
    parent:"body"
  },
  effect: (targets, config) => {
    gsap.set(config.parent, {perspective:300})
    let tl = gsap.timeline()
    tl.from(targets, {
      duration:config.duration,
      rotationX:config.rotationX,
      rotationY:config.rotationY,
      transformOrigin:config.transformOrigin,
      ease:config.ease,
      stagger:{
        each:0.05
      }})
    tl.from(targets, {
      duration: 0.4,
      opacity:0,
      ease:"none",
      stagger:{
        each:0.05
      }
    }, 0)
    return tl
  }
})

gsap.registerEffect({
  name:"twistOut",
  extendTimeline:true,
  defaults:{
    rotationX:0,
    rotationY:0,
    transformOrigin:"50% 50%",
    ease:"power1.in",
    parent:"body"
  },
  effect: (targets, config) => {
    gsap.set(config.parent, {perspective:300})

    let tl = gsap.timeline()
    tl.to(targets, {
      duration:0.5,
      rotationX:config.rotationX,
      rotationY:config.rotationY,
      transformOrigin:config.transformOrigin,
      ease:config.ease,
      stagger:{
        each:0.01
      }})
    tl.to(targets, {
      duration: 0.3,
      opacity:0,
      ease:"none",
      stagger:{
        each:0.01
      }
    }, 0)
    return tl
  }
})

function splitElements() {
  elements.forEach(function(element, index){
    let split = new SplitText(element, {type:"chars,words,lines"})
    effectsTimeline.twistIn(split.chars, {rotationX:120, transformOrigin:"50% 0%"}, index > 0 ? "-=0.2" : 0)
      // .twistOut(split.chars, {rotationX:-90, transformOrigin:"50% 100% -50", duration: .5})
  })
}

splitElements()

GSDevTools.create({animation:effectsTimeline})

// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     case 37:
//       //left
//       effectsTimeline.reverse()
//       break
//     case 38:
//       //up
//       break
//     case 39:
//       //right next
//       effectsTimeline.play()
//       break
//     case 40:
//       //down
//       break
//   }
// };

// document.onclick = function() {
//   effectsTimeline.play()
// }

// GSDevTools.create({
//   animation: effectsTimeline,
//   loop: true,
//   persist: false,
// });


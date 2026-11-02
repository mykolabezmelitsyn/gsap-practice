import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Observer } from "gsap/Observer";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Draggable,DrawSVGPlugin,EaselPlugin,Flip,GSDevTools,InertiaPlugin,MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,Observer,Physics2DPlugin,PhysicsPropsPlugin,PixiPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);

const gear = document.querySelector('.gear-img')

// gsap.to(".box", {
//   stagger: 1,
//   x: 500,
//   scale: 1.2,
//   rotation: 360,
//   backgroundColor: "blue",
//   borderRadius: 24,
//   duration: 6,
// })

// gsap.to(gear, {
//   stagger: .1,
//   x: 100,
//   y: 100,
//   scale: 2,
//   rotate: 360,
//   duration: 2
// })

// gsap.from(gear, {
//   stagger: .1,
//   x: 100,
//   y: 100,
//   scale: 2,
//   rotate: 360,
//   duration: 2,
// })

// gsap.fromTo(gear,
//   {
//       x: 100,
//       y: 100,
//       scale: 2,
//       rotate: 360,
//       duration: 2,
//   },
//   {
//     x: 0,
//     y: 0,
//     scale: 1,
//     rotate: 0,
//     duration: 2,
//   }
// )

// gsap.to(gear, {
//   x: 300,
//   duration: 1,
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
//   ease: "steps(23)"
// })

// gsap.to(".box", {
//   stagger: {
//     // amount: .5,
//     from: "edges",
//     each: .5,
//
//   },
//   x: 500,
//   scale: 1.2,
//   rotation: 360,
//   backgroundColor: "blue",
//   borderRadius: 24,
//   duration: 6,
// })

// const tween = gsap.to('.fred.green', {
//   duration: 3,
//   x: 600,
//   rotate: 360,
//   transformOrigin: 'left bottom',
//   ease: 'linear',
//   paused: true
// })

// document.querySelector('#play').addEventListener('click', () => tween.play())
// document.querySelector('#pause').addEventListener('click', () => tween.pause())
// document.querySelector('#reverse').addEventListener('click', () => tween.reverse())
// document.querySelector('#restart').addEventListener('click', () => tween.restart())

// gsap.set('.box', {
//   scale: 0.3
// })
//
// gsap.timeline()
//   .from(".box", { duration: 1, opacity: 0 })
//   .from(".red", { opacity: 0, scale: 0, ease: "back" })
//   .from(".box", { opacity: 0, scale: 0, ease: "back" })

// let tl = gsap.timeline();

// tl.to('.box.red', {y:300}, "+=1")  // start 1 second after previous tween ends
// tl.to('.box.orange', {x:300}, "-=1")  // start 1 second before previous tween ends
// tl.to('.box.green', {rotation:90}, "<")  // start when previous tween begins
// tl.to('.box', {opacity:0.5}, "<1").add('box-play') // start 1 second after previous tween begins
// tl.to('.box.green', {x:200}, 1) // start exactly at a time of 1

// document.querySelector('#play').addEventListener('click', () => tl.play())
// document.querySelector('#pause').addEventListener('click', () => tl.pause())
// document.querySelector('#reverse').addEventListener('click', () => tl.reverse())
// document.querySelector('#restart').addEventListener('click', () => tl.restart())

// gsap.to(".box", {
//   keyframes: {
//     x: [0, 100, 100, 0, 0],
//     y: [0, 0, 100, 100, 0],
//     ease: "power1.inOut"
//   },
//   duration: 2
// });

// gsap.to(".box", {
//   keyframes: [
//     {x: 100, duration: 1, ease: 'sine.out'}, // finetune with individual eases
//     {y: 200, duration: 1, delay: 0.5}, // create a 0.5 second gap
//     {rotation: 360, duration: 2, delay: -0.25} // overlap by 0.25 seconds
//   ],
//   ease: 'expo.inOut' // ease the entire keyframe block
// });

gsap.to(".box", {
  keyframes: {
    y: [0, 80, -10, 30, 0],
    ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
    easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
  },
  rotate: 180,
  ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
  duration: 5,
  stagger: 0.2
});
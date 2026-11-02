import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
// CustomBounce requires CustomEase
import {CustomBounce} from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import {CustomWiggle} from "gsap/CustomWiggle";
import {RoughEase, ExpoScaleEase, SlowMo} from "gsap/EasePack";

import {Draggable} from "gsap/Draggable";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {EaselPlugin} from "gsap/EaselPlugin";
import {Flip} from "gsap/Flip";
import {GSDevTools} from "gsap/GSDevTools";
import {InertiaPlugin} from "gsap/InertiaPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {Observer} from "gsap/Observer";
import {Physics2DPlugin} from "gsap/Physics2DPlugin";
import {PhysicsPropsPlugin} from "gsap/PhysicsPropsPlugin";
import {PixiPlugin} from "gsap/PixiPlugin";
import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {SplitText} from "gsap/SplitText";
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(Draggable, DrawSVGPlugin, EaselPlugin, Flip, GSDevTools, InertiaPlugin, MotionPathHelper, MotionPathPlugin, MorphSVGPlugin, Observer, Physics2DPlugin, PhysicsPropsPlugin, PixiPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase, CustomBounce, CustomWiggle);

// function custom(index, target, targets) {
//   if(target.innerHTML === "B"){
//     return 50;
//   }
//   return index * 20;
// }

// gsap.to(".box_3", {
//   y: function(index, target, targets) {
//     console.log(targets);
//     return index * 20
//   },
//   x: custom
// })

// gsap.to(".box_3", {
//   y: custom,
//   x: custom
// })

/*----------------------------------------------------------------*/

let svgNS = "http://www.w3.org/2000/svg";

//chuck a bunch of square <rects> in the svg
function grid() {
  let svg = document.getElementById("grid")
  let rows = 10;
  let cols = 10
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let rect = document.createElementNS(svgNS, "rect");
      gsap.set(rect, {attr: {fill: "pink", width: 49, height: 49, x: c * 50, y: r * 50}});
      svg.appendChild(rect)
    }
  }
}

grid();

function weightedRandom(collection, ease) {
  return gsap.utils.pipe(
    Math.random,            //random number between 0 and 1
    gsap.parseEase(ease),   //apply the ease
    gsap.utils.mapRange(0, 1, -0.5, collection.length - 0.5), //map to the index range of the array, stretched by 0.5 each direction because we'll round and want to keep distribution (otherwise linear distribution would be center-weighted slightly)
    gsap.utils.snap(1),     //snap to the closest integer
    i => collection[i]      //return that element from the array
  );
}

let colors = ["yellow", "white", "blue", "green", "orange"];
let randomColor = weightedRandom(colors, "power1")

gsap.to("rect", {
  fill: randomColor
});

//////////////////////////////////////////////////////////////////

let h1 = document.querySelector('[data-lesson="3_5"] h1')
let mySplit = new SplitText(h1, {type: "chars"})

// console.log(mySplit.chars) // an array of elements

let scaleDistributor = gsap.utils.distribute({
  base: 0.2,
  amount: 1.2,
  from: "center",
  ease: "power1"
})

let distanceDistributor = gsap.utils.distribute({
  base: -200,
  amount: 400,
  ease: "none"
})


gsap.to(mySplit.chars, {
  scale: scaleDistributor,
  x: distanceDistributor,
  opacity: 0,
  repeat: 100,
  yoyo: true,
  stagger: {
    each: 0.01,
    from: "center"
  }
})

//////////////////////////////////////////////////////////////////
let animation = gsap.timeline({repeat: -1})
let staggerAmount = 1.5

function init() {
  gsap.set('[data-lesson="3_6"] .demo', {
    autoAlpha: 1
  })
  animation.from('[data-lesson="3_6"] .demo div', {
    y: 80,
    opacity: 0,
    stagger: staggerAmount
  })
    .to('[data-lesson="3_6"] .demo div', {
      y: -80,
      opacity: 0,
      stagger: staggerAmount
    }, staggerAmount)
}

init();

//////////////////////////////////////////////////////////////////

let animation_7 = gsap.timeline({repeat:20})
let targets = document.querySelectorAll("[data-lesson='3_7'] .demo div")
let numberOfTargets = targets.length

let duration = 0.4 //change this
let pause = 0.75 // change this

let stagger = duration + pause
let repeatDelay = (stagger * (numberOfTargets - 1)) + pause

function init_7() {
  gsap.set('[data-lesson="3_7"] .demo', {
    autoAlpha:1
  })
  gsap.set('[data-lesson="3_7"] .demo div', {
    transformOrigin:"50% 50% -100"
  })

  animation_7.from(targets, {
    rotationX:-90,
    duration:duration,
    opacity:0,
    stagger:{
      each:stagger,
      repeat:-1,
      repeatDelay:repeatDelay
    }})
    .to(targets, {
      rotationX:90,
      duration:duration,
      opacity:0,
      stagger:{
        each:stagger,
        repeat:-1,
        repeatDelay:repeatDelay
      }}, stagger)
}

init_7();


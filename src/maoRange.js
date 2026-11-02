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

const setScale = gsap.quickSetter('.box', "scale")
const setScaleX = gsap.quickSetter('.box', "scaleX")
const setScaleY = gsap.quickSetter('.box', "scaleY")

const mapRange = gsap.utils.mapRange(0, demo.clientWidth, 0, 360);
const snap = gsap.utils.snap(45)
const setRotation = gsap.quickSetter('.box', "rotation", "deg")

let center = demo.clientWidth / 2;

const pipe = gsap.utils.pipe(
  mapRange,
  snap,
  setRotation
)

demo.addEventListener('mousemove', function (e) {
  mouseX.textContent = e.offsetX

  // let dX = Math.abs(center - e.offsetX)
  // let dY = Math.abs(center - e.offsetY)

  // distanceX.textContent = `${dX} x ${dY}`

  // let rotation = 360 / demo.clientWidth * e.offsetX * .5;
  // let rotation = gsap.utils.mapRange(0, demo.clientWidth, 0, 360, e.offsetX);

  // let scaleX = gsap.utils.mapRange(0, demo.clientWidth, 10, 1, dX)
  // let scaleY = gsap.utils.mapRange(0, demo.clientHeight, .5, 10, dY)

  // let scale = gsap.utils.mapRange(0, demo.clientWidth, .5, 10, dX)

  // rotation = gsap.utils.snap(45, rotation)

  // setScale(scale)
  // setScaleX(scaleX)
  // setScaleY(scaleX)

  // setRotation(rotation)

  pipe(e.offsetX)
})

const boxWrapper = document.querySelector('.boxWrapper')
const boxes = document.querySelectorAll('.box2')
const demo2Width = demo2.clientWidth

const boxWrapperWidth = boxWrapper.offsetWidth
const scrollAmount = boxWrapperWidth - demo2Width

const tween = gsap.to(boxWrapper, { x: -scrollAmount, duration: 10, ease: 'none' })

boxes.forEach((box, index) => {
  box.textContent = index+1
})

demo2.addEventListener('mousemove', function (e) {
  mouseX2.textContent = e.offsetX

  let distance2 = e.offsetX - demo2Width/2
  let mapMinValue = -1 * demo2Width/2
  distanceX2.textContent = distance2

  let timeScale = gsap.utils.mapRange(mapMinValue, demo2Width/2, -3, 3, distance2)

  tween.timeScale(timeScale)
})
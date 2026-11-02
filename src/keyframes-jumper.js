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

console.log(gsap.version) // need 3.9+
gsap.set(".demo", {autoAlpha:1})
const slimes = gsap.utils.toArray(".slime")
const tl = gsap.timeline()
// tl.to(".slime", {
//   keyframes: {
//     "25%":{y:0},
//     "50%":{y:-100, ease:"sine"},
//     "99%":{y:0, ease:"bounce"},
//     "100%":{x:320, ease:"none"}
//   },
//   duration:2
// })

tl.to(".slime", {
  keyframes: {
    "25%":{x: 300, scale: 1, ease: "linear"},
    "49%":{scale: 1.5, ease: "linear"},
    "50%":{x: 150, scale: 1.5, ease: "linear", duration: .1},
    "75%":{x: 50, scale: 1, ease: "linear", duration: .1},
    "100%":{x: 400, scale: 1, rotate: 360, ease: "linear"},
  },
  duration:5
})

play.addEventListener("click", ()=> tl.restart())
GSDevTools.create({animation:tl})
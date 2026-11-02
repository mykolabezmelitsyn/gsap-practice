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

const hole = document.querySelector(".hole")
const herman = document.querySelector(".herman")
const shadow = document.querySelector(".shadow")
const tl = gsap.timeline({repeat: 10, yoyo: true, repeatDelay: .5})

tl.from(hole, {scale:0, repeat:1, yoyo:true})
  .fromTo(herman, { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, 0.2)
  .to(herman, { y:-4, ease:"power1.in" }, ">")
  .to(herman, { scaleY: .8, scaleX: 1.3, repeat: 1, duration: .2, yoyo:true, transformOrigin: "center bottom" })
  .to(shadow, {opacity: 1, duration: .2}, .7)
  .to(shadow, {scaleX: .7,ease: "power1.in"}, ">")

GSDevTools.create({})

//////

const h1 = document.querySelector('h1');
const h1_content = h1.textContent;

// h1.textContent = '';

console.log(h1_content)

// gsap.to(h1, {text: h1_content, duration: 10, ease: "none"})
// gsap.from(h1, {text: h1_content, duration: 10, ease: "none"})

// split elements with the class "split" into words and characters
let split = SplitText.create('h1', { type: "words, chars, lines", mask: "lines" });

// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: .3,
  y: -10,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05, // 0.05 seconds between each
  ease: "back(4)"
});
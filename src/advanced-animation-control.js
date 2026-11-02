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

let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);

let time = select("#time");
let pause = select("#pause"); //better than document.querySelector("#pause")

let home = select("#home")
let candy = select("#candy")
let dogPark = select("#dogpark")
let school = select("#school")
let progressSlider = select("#progressSlider");

let animation = gsap.to("#herman", { duration:6, ease:"none",
  motionPath:{
    path:"#motionpath",
    align:"#herman"
  },
  onUpdate: animationUpdate,
  onComplete: () => pause.innerHTML = "play"
});

pause.addEventListener("click", ()=> {
  animation.paused(!animation.paused());
  if(animation.progress() === 1){
    animation.restart();
  }
  setButtonState()
})

function setButtonState() {
  pause.innerHTML = animation.paused() ? "play" : "pause";
}


// animation.pause()
// gsap.to(animation, {time: 3})

progressSlider.addEventListener('input', function() {
  animation.progress(this.value).pause();
})

progressSlider.addEventListener("change", function () {
  pause.textContent = "play";
});

function animationUpdate() {
  progressSlider.value = animation.progress();
  time.textContent = this.time().toFixed(2);
}

home.addEventListener('click', () => {
  animation.pause()

  gsap.to(animation, {progress: 0, duration: 1, onComplete: setButtonState})
})

candy.addEventListener('click', () => {
  animation.pause()

  gsap.to(animation, {progress: .5, duration: 1, onComplete: setButtonState})
})

dogPark.addEventListener('click', () => {
  animation.pause()

  gsap.to(animation, {progress: .9, duration: 1, onComplete: setButtonState})
})

school.addEventListener('click', () => {
  animation.pause()

  gsap.to(animation, {progress: 1, duration: 1, onComplete: setButtonState})
})


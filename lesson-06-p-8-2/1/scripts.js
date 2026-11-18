import { gsap } from "../../src/libs/gsap.js";

gsap.to(".demo", {opacity:1, stagger:0.1})
gsap.defaults({ease:"linear"})
const animations = [];

//fade in all
const fadeInAll = gsap.from(".fadeInAll .box", { opacity: 0, stagger: 0.5 });

animations.push(fadeInAll);

//fadeInOutAll
const fadeInOutAll = gsap.fromTo(
  ".fadeInOutAll .box",
  { opacity: 0 },
  {
    opacity: 1,
    stagger: {
      each: 1,
      repeat: 1,
      yoyo: true
    }
  }
);

animations.push(fadeInOutAll);

//fadeInOutAllTimeline

const fadeInOutAllTimeline = gsap.timeline()
  .from(".fadeInOutAllTimeline .box", {
    opacity:0,
    stagger:1
  })
  .to(".fadeInOutAllTimeline .box", {
    opacity:0,
    stagger:1
  }, 0.5)

animations.push(fadeInOutAllTimeline)

//Fade in out all loop

const fadeInOutAllLoop = gsap.timeline()
const loopBoxes = gsap.utils.toArray(".fadeInOutAllLoop .box")
loopBoxes.forEach((box, index) => {
  fadeInOutAllLoop.from(box, {opacity:0})
    .to(box, {opacity:0})
})

animations.push(fadeInOutAllLoop)

//Fade in out all not last loop

const fadeInOutNotLastLoop = gsap.timeline()
const loopBoxesNotLast = gsap.utils.toArray(".fadeInOutNotLastLoop .box")
loopBoxesNotLast.forEach((box, index) => {
  fadeInOutNotLastLoop.from(box, {opacity:0})
  //don't fade out last box
  if(index < loopBoxes.length-1){
    fadeInOutNotLastLoop.to(box, {opacity:0})
  }

})

animations.push(fadeInOutNotLastLoop)

//fade in out all not last timeline

const fadeInOutNotLastTimeline = gsap.timeline()
  .from(".fadeInOutNotLastTimeline .box", {
    opacity:0,
    stagger:1
  })
  .to(".fadeInOutNotLastTimeline .box:not(:last-of-type)", {
    opacity:0,
    stagger:1
  }, 0.5)

animations.push(fadeInOutNotLastTimeline)


//No fade in first no fade out last loop

const noFadeInFirstNoFadeOutLastLoop = gsap.timeline()
const loopBoxesNotFirstOrLast = gsap.utils.toArray(".noFadeInFirstNoFadeOutLastLoop .box")
loopBoxesNotFirstOrLast.forEach((box, index) => {

  //don't fade in first
  if(index != 0) {
    noFadeInFirstNoFadeOutLastLoop.from(box, {opacity:0})
  }
  //don't fade out last box
  if(index < loopBoxes.length-1){
    noFadeInFirstNoFadeOutLastLoop.to(box, {opacity:0})
  }

})

animations.push(noFadeInFirstNoFadeOutLastLoop)

//No fade in first or fade out last scrub timeline

const fadeInOutAllTimelineForScrub = gsap.timeline()
  .from(".noFadeInFirstNoFadeOutLastSrub .box", {
    opacity:0,
    stagger:1
  })
  .to(".noFadeInFirstNoFadeOutLastSrub .box", {
    opacity:0,
    stagger:1
  }, 0.5)


const noFadeInFirstNoFadeOutLastScrub = fadeInOutAllTimelineForScrub.tweenFromTo(0.5, fadeInOutAllTimelineForScrub.duration() - 0.5 )

animations.push(noFadeInFirstNoFadeOutLastScrub)


//fancy restart

const demos = gsap.utils.toArray(".demo");
demos.forEach((demo, index) => {
  demo.querySelector(".restart").addEventListener("click", () => {
    animations[index].restart();
  });
  demo.querySelector("h2").prepend(`${index + 1}: `)
});
PR.prettyPrint();

// I explain how this demo was built in my premium GreenSock courses at
// https://www.creativeCodingClub.com

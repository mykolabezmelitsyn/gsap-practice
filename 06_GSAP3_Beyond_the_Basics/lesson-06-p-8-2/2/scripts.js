import { gsap, ScrollTrigger } from "../../../src/libs/gsap.js";

console.clear();
gsap.set(".rotator", { opacity: 1 });

const headings = gsap.utils.toArray(".rotator h1")

let scrollTimeline = gsap.timeline({paused:true})
  .from(".rotator h1", {
    opacity:0,
    scale:0,
    stagger:1.5
  })
  .to(".rotator h1", {
    opacity: 0,
    scale: 2,
    stagger:1.5
  }, 1);

const tween = scrollTimeline.tweenFromTo(0.5, scrollTimeline.duration() - 0.5)

ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  pin: true,
  end: "+=" + window.innerHeight * 3,
  animation: tween,
  scrub: true
});

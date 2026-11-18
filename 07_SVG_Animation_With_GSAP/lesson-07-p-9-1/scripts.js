import {gsap} from "../../src/libs/gsap.js";

const tl = gsap.timeline({defaults:{ease:"none", repeat:500, yoyo:true}})
  .to("#rect1", {x:1100, duration:45})
  .to("#rect2", {x:1200, duration:50}, 0)
  .to("#rect3", {x:800, duration:65}, 0)
  .time(150).timeScale(4)


document.addEventListener("click",
  ()=>tl.pause(Math.random() * tl.duration())
)


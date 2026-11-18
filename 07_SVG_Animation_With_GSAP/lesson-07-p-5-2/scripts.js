import {Draggable, GSDevTools, gsap} from "../../src/libs/gsap.js";

Draggable.create(".drag")

////////////////////////////////////////////////

const tl = gsap.timeline({})

  //div animation
  .from(".blob-2", {x:-45, y:-45, scale:0.1})
  .to(".blob-2", {width:400, ease:"none"})
//


//svg animation
tl.from("#rect", {x:-45, y:-45, scale:0.1, transformOrigin:"50% 50%"}, 0)
  .to("#rect", {attr:{width:400}, ease:"none"}, 0.5)



GSDevTools.create({animation:tl})


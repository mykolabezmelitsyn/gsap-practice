import {gsap, GSDevTools} from "../src/libs/gsap.js";

gsap.set(".demo", {
  opacity:1
})

gsap.set("path", {
  opacity:gsap.utils.distribute({
    base: 0.2,
    amount: 0.8
  })
})

const tl = gsap.timeline()
  .fromTo("path",
    {drawSVG:"100% 100%"},
    {drawSVG:"151% 50%", duration:2,
      stagger:{
        each:0.05,
        from:"center"
      },
      repeat:1,
      yoyo:true
    })

  //secret sauce ;)
  //flip the rectangles vertically immediately before the repeat happens. This makes it look like they are "un-drawing" from the bottom.
  .set("path", {
    rotation:180,
    transformOrigin:"50% 50%"
  }, "<50%")


GSDevTools.create({animation:tl})

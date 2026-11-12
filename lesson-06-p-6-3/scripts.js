import {gsap, SplitText, GSDevTools, SlowMo} from "../src/libs/gsap.js";

let elements = document.querySelectorAll(".wrapper1 li")
let effectsTimeline = gsap.timeline({delay: 0.3})

gsap.registerEffect({
  name: "in",
  extendTimeline: true,
  defaults: {
    duration: 0.5,
    fade: 0.1,
    y: 0,
    x: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    transformOrigin: "50% 50%",
    perspective: 400,
    ease: "power1",
    each: 0.05,
    // staggerEase: "slow(0.5, 0.2, false)",
    staggerEase: "power1.in",
    from: "start"
  },
  effect: (targets, config) => {

    if (config.rotationX !== 0 || config.rotationY !== 0) {
      console.log("need 3D")
      gsap.set(targets[0].parentNode, {perspective: config.perspective})
    }

    let tl = gsap.timeline()
    tl.from(targets, {
      duration: config.duration,
      ease: config.ease,
      x: config.x,
      y: config.y,
      scale: config.scale,
      transformOrigin: config.transformOrigin,
      rotationX: config.rotationX,
      rotationY: config.rotationY,
      stagger: {
        each: config.each,
        ease: config.staggerEase,
        from: config.from
      }
    })

    tl.from(targets, {
      duration: config.fade,
      opacity: 0,
      ease: "none",
      stagger: {
        each: config.each,
        ease: config.staggerEase,
        from: config.from
      }
    }, 0)
    return tl
  }
})

gsap.registerEffect({
  name: "out",
  extendTimeline: true,
  defaults: {
    duration: 0.5,
    fade: 0.5,
    y: 0,
    x: 0,
    rotationX: 0,
    rotationY: 0,
    perspective: 400,
    scale: 1,
    transformOrigin: "50% 50%",
    ease: "power1",
    each: 0.05,
    staggerEase: "power1.in",
    from: "start"
  },
  effect: (targets, config) => {

    let tl = gsap.timeline()
    tl.to(targets, {
      duration: config.duration,
      ease: config.ease,
      x: config.x,
      y: config.y,
      scale: config.scale,
      transformOrigin: config.transformOrigin,
      rotationX: config.rotationX,
      rotationY: config.rotationY,
      stagger: {
        each: config.each,
        ease: config.staggerEase,
        from: config.from
      }
    })

    tl.to(targets, {
      duration: config.fade,
      opacity: 0,
      ease: "none",
      stagger: {
        each: config.each,
        ease: config.staggerEase,
        from: config.from
      }
    }, 0)
    return tl
  }
})

function splitElements() {
  elements.forEach(function (element, index) {
    let split = new SplitText(element, {type: "chars,words,lines"})
    effectsTimeline.in(split.chars, {
      rotationX: -90,
      transformOrigin: "50% 0% 30",
      fade: 0.5,
      duration: .5,
      from: "center"
    })
      .out(split.chars, {
        y: 50,
        fade: 0.3,
        from: "edges"// center, end, edges, random, index(11)
      }, "+=1")
  })
}

splitElements()

GSDevTools.create()

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      //left
      effectsTimeline.reverse()
      break
    case 38:
      //up
      break
    case 39:
      //right next
      effectsTimeline.play()
      break
    case 40:
      //down
      break
  }
};

document.onclick = function () {
  effectsTimeline.play()
}

//Jelly
gsap.registerEffect({
  name: "jelly",
  defaults: {
    stagger: 0.03,
    duration: 0.8
  },
  extendTimeline: true,
  effect: (target, config) => {
    gsap.set(target, {transformOrigin: "50% 50%"})
    let tl = gsap.timeline()
    tl.from(target, {scale: 0.8, duration: config.duration, stagger: config.stagger, ease: "elastic"})
    tl.from(target, {opacity: 0, duration: 0.01, stagger: config.stagger}, 0)
    return tl
  }
})

let tl = gsap.timeline({delay: 0.5})
  .jelly("#numbers > g", {stagger: 0.2})
  .jelly("#text", "-=0.6")

//Burn
let elements_2 = document.querySelectorAll(".wrapper2 li")
let effectsTimeline_2 = gsap.timeline({delay: 0.5})

gsap.registerEffect({
  name: "burnIn",
  extendTimeline: true,
  defaults: {
    y: 0,
    x: 0,
    duration: 0.5,
    ease: "none"
  },
  effect: (targets, config) => {

    gsap.set(targets, {filter: "blur(0px) brightness(1)"})
    let tl = gsap.timeline()
    tl.from(targets, {
      filter: "blur(20px) brightness(8)",
      scale: 0.8,
      rotation: -10,
      duration: config.duration,
      ease: config.ease,
      x: config.x,
      y: config.y,
      stagger: {
        each: 0.02,
        ease: "none"
      }
    })
    tl.from(targets, {
      duration: 0.1, opacity: 0, ease: "none", stagger: {
        each: 0.02,
        ease: "power2"
      }
    }, 0)
    return tl
  }
})

gsap.registerEffect({
  name: "burnOut",
  extendTimeline: true,
  defaults: {
    y: 0,
    x: 0,
    duration: 0.3,
    ease: "none"
  },
  effect: (targets, config) => {

    gsap.set(targets, {filter: "blur(0px) brightness(1)"})
    let tl = gsap.timeline()
    tl.to(targets, {
      filter: "blur(30px) brightness(10)",
      scale: 0.3,
      rotation: 10,
      duration: config.duration,
      ease: config.ease,
      x: config.x,
      y: config.y,
      clearProps: "filter",
      stagger: {
        each: 0.01,
        ease: "none"
      }
    })

    tl.to(targets, {
      duration: 0.1, opacity: 0, ease: "none", stagger: {
        each: 0.01,
        ease: "power2"
      }
    }, 0)
    return tl
  }
})


function splitElements_2() {
  elements_2.forEach(function (element, index) {
    let split = new SplitText(element, {type: "chars,words,lines"})
    effectsTimeline_2.burnIn(split.chars, {x: -10}, index > 0 ? "+=0.2" : 0)
      //  .addPause()
      .burnOut(split.chars, {x: 50}, "+=2")

  })
}

splitElements_2()

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      //left
      effectsTimeline.reverse()
      break
    case 38:
      //up
      effectsTimeline.restart()
      break
    case 39:
      //right next
      effectsTimeline.play()
      break
    case 40:
      //down
      effectsTimeline.pause(0)
      break
  }
};

document.onclick = function () {
  effectsTimeline.play()
}

//Random fadeIn/Out
let elements_3 = document.querySelectorAll(".wrapper3 p")
let effectsTimeline_3 = gsap.timeline({})

gsap.registerEffect({
  name:"randomFade",
  extendTimeline:true,
  defaults:{
    y:0,
    x:0,
    duration:1,
    ease:"power1.out",
    scale:1,
    direction:"in"
  },
  effect: (targets, config) => {
    // gsap.set(targets, {filter:"blur(0)"})
    let tl = gsap.timeline()
    if(config.direction === "in") {
      tl.from(targets, {opacity:0, duration:config.duration, ease:config.ease, x:config.x, y:config.y, scale:config.scale,
        stagger:{
          each:0.01,
          from:"random"
        }
      })
    } else {
      tl.to(targets, {opacity:0, duration:0.5, ease:config.ease, x:config.x, y:config.y, scale:config.scale,
        stagger:{
          each:0.01,
          from:"random"
        }
      })
    }

    return tl
  }
})

function splitElements_3() {
  elements_3.forEach(function(element, index){
    let split = new SplitText(element, {type:"chars,words,lines"})
    effectsTimeline_3.randomFade(split.chars, {duration: 0.2, y: 25})
      //.addPause()
      // .randomFade(split.words, {direction:"out", duration: 0.1})
  })
}

splitElements_3()

GSDevTools.create()












document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      //left
      effectsTimeline.reverse()
      break
    case 38:
      //up
      break
    case 39:
      //right next
      effectsTimeline.play()
      break
    case 40:
      //down
      break
  }
};

document.onclick = function() {
  effectsTimeline.play()
}
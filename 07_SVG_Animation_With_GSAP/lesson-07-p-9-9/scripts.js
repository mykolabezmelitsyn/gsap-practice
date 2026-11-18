import {gsap, GSDevTools} from "../../src/libs/gsap.js";

const SVGNS = "http://www.w3.org/2000/svg"

const main = gsap.timeline({});

function createAnimation(pathGroup) {
  let paths = pathGroup.querySelectorAll("path")
  paths.forEach((path, index) => {
    let circle = document.createElementNS(SVGNS, "circle");
    circle.setAttribute("style", "fill:rgb(25, 255, 0); stroke:none;");
    circle.setAttribute("cy", 0);
    circle.setAttribute("cx", index * 10);
    circle.setAttribute("r", 5);
    pathGroup.appendChild(circle);
    let tl = gsap.timeline()

    tl.to(circle,
      {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5]
        },
        duration: "random(3, 5)",
        ease: "power1.inOut"
      }
    )
    tl.from(circle, { opacity: 0, scale:0, duration: 0.5, transformOrigin:"50% 50%", repeat:1, yoyo:true, repeatDelay:tl.duration()-1}, 0)
    main.add(tl, gsap.utils.random(0,1))
  });
}

const pathGroup = document.querySelector("#paths")
createAnimation(paths);

GSDevTools.create({ animation: main });


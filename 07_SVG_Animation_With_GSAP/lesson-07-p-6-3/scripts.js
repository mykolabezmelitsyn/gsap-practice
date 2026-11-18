import {gsap, GSDevTools} from "../../src/libs/gsap.js";

gsap.set(".demo", { opacity: 1 });

const svg = document.querySelector(".demo svg");
const ns = "http://www.w3.org/2000/svg";

const tl = gsap.timeline();

function createCircles(numCircles) {
  for (let i = 0; i < numCircles; i++) {
    let newCircle = document.createElementNS(ns, "circle");
    newCircle.setAttributeNS(null, "cx", 100);
    newCircle.setAttributeNS(null, "cy", 100);
    newCircle.setAttributeNS(null, "r", 20);
    newCircle.setAttributeNS(null, "stroke", "white");
    newCircle.setAttributeNS(null, "stroke-width", 1);
    svg.appendChild(newCircle);
    let start = i/numCircles // secret sauce for circles
    gsap.set(newCircle, {fill:`hsl(${(i/numCircles) * 360}, 80%, 50%)`})
    tl.to(newCircle, {
      motionPath: {
        path: ".myPath",
        align: ".myPath",
        alignOrigin: [0.5, 0.5],
        start:start,
        end:start + 1
      }, ease:"none", duration:8, repeat:20
    }, 0)
    tl.to(newCircle, {scale:1, duration:1, repeat:80, repeatDelay:1, yoyo:true}, i*0.5)
  }
}

createCircles(30);



GSDevTools.create({ animation: tl });
gsap.config({ trialWarn: false });


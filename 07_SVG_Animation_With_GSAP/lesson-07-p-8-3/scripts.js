import {gsap, GSDevTools, MorphSVGPlugin} from "../../src/libs/gsap.js";

const g = document.getElementById("group");
const svg = document.getElementById("svg");
let count = 0;

svg.addEventListener("click", function (e) {
  let newG = g.cloneNode(true);
  newG.setAttribute("id", "newG" + count++);
  newG.setAttribute("class", "newG");

  let box = g.getBBox();
  console.log(box);
  gsap.set(newG, {
    x: event.offsetX  -box.x - box.width / 2,
    y: event.offsetY  -box.y - box.height / 2
  });
  gsap.fromTo(newG, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, ease:"back"})
  svg.appendChild(newG);
});

clear.addEventListener("click", () => {
  gsap.set("#group", { x: -200 });
  console.log(g.getBBox())
  document.querySelectorAll(".newG").forEach((g) => g.remove());
});


import {gsap, SplitText, CustomEase} from "../src/libs/gsap.js";

let select = e => document.querySelector(e)
let selectAll = e => document.querySelectorAll(e)
let svg
let svgSize = 200
let animation = gsap.timeline()
let chars
let duration = 4
let amplitude = 1
let frequency = 0.5
let ease
let durationSlider = select("#durationSlider")
let durationDisplay = select("#durationDisplay")
let amplitudeSlider = select("#amplitudeSlider")
let amplitudeDisplay = select("#amplitudeDisplay")
let frequencySlider = select("#frequencySlider")
let frequencyDisplay = select("#frequencyDisplay")

function updateAnimation() {
  duration = durationSlider.value
  amplitude = amplitudeSlider.value
  frequency = frequencySlider.value
  console.log("updateAnimation")
  animation.progress(0).clear()
  gsap.set(chars.chars, {clearProps: "y,opacity"})

  animation.from(chars.chars, {y: 50, duration: duration, stagger: 0.03, ease: `elastic(${amplitude}, ${frequency})`})
  animation.from(chars.chars, {opacity: 0, duration: 0.2, stagger: 0.03}, 0)
  animation.restart()
  CustomEase.getSVGData(`elastic(${amplitude}, ${frequency})`, {width: svgSize, height: svgSize, path: "#easePath"})

}

function createVisualizer(size) {
  let svgNS = "http://www.w3.org/2000/svg";
  svg = document.createElementNS(svgNS, "svg");
  let visualizer = document.createElementNS(svgNS, "g");
  let rect = document.createElementNS(svgNS, "rect");
  let path = document.createElementNS(svgNS, "path");
  let dot = document.createElementNS(svgNS, "circle");
  svg.setAttribute('width', size)
  svg.setAttribute('height', size)
  path.setAttribute('d', "M0," + size + " " + size + ", 0")
  path.setAttribute('id', "easePath")
  rect.setAttribute('width', size)
  rect.setAttribute('height', size)
  rect.setAttribute('fill', 'rgba(0, 0, 0, 0.1)')
  visualizer.append(rect)
  visualizer.appendChild(path)
  svg.appendChild(visualizer)
  document.body.appendChild(svg)
  svg.addEventListener("click", () => gsap.to(svg, {opacity: 1}))
}


function init() {
  durationSlider.value = duration
  durationDisplay.textContent = duration
  amplitudeSlider.value = amplitude
  amplitudeDisplay.value = amplitude
  frequencySlider.value = frequency
  frequencySlider.value = frequency
  chars = new SplitText("p", {type: "chars"})
  createVisualizer(svgSize)
  updateAnimation()
}

durationSlider.addEventListener("input", function () {
  durationDisplay.textContent = this.value
});

durationSlider.addEventListener("change", function () {
  updateAnimation()
});

amplitudeSlider.addEventListener("input", function () {
  amplitudeDisplay.textContent = this.value
});

amplitudeSlider.addEventListener("change", function () {
  updateAnimation()
});

frequencySlider.addEventListener("input", function () {
  frequencyDisplay.textContent = this.value
});

frequencySlider.addEventListener("change", function () {
  updateAnimation()
});


window.addEventListener("load", function (event) {
  init(); //do stuff
});
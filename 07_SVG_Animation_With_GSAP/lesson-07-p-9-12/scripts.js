import {gsap} from "../../src/libs/gsap.js";

gsap.to("svg", {opacity:1})

const ball = document.getElementById("ball")
const ballGroup = document.getElementById("balls")
const colors = ["#EC2222", "#ECD422", "#22ECE4", "#EC22D5", "#34EC22", "#2265EC", "#EC2286", "#D07FFF"]

function createBalls(numOfBalls) {
  for( let i = 0; i < numOfBalls; i++){
    let newBall = ball.cloneNode()
    ballGroup.appendChild(newBall)
  }
}

createBalls(1000)

const balls = document.querySelectorAll("#balls > ellipse")

gsap.set(balls, {fill:gsap.utils.wrap(colors)})


let tl = gsap.timeline({repeat:-1, repeatRefresh:true})

tl.set(balls, {scale:"random(0.3, 1)", y:50, x:0})
tl.to(balls, {y:-100, stagger:{each:0.1, repeat:1, yoyo:true}})
  .to(balls, {x:"random(-200, 200)", duration:1, ease:"none", stagger:0.1}, 0)


//click to pause

let isPlaying = true

document.addEventListener("click", function(){
  gsap.to(tl, {timeScale:isPlaying = !isPlaying, duration:1})
})


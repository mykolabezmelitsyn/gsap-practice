import {gsap, SplitText, GSDevTools} from "../src/libs/gsap.js";

let title = document.querySelector('[data-title]')
let tl = gsap.timeline({ repeat: -1 });
let duration = 2;
let splitTitle = new SplitText(title, { type: "words" });//chars,words,lines

function init() {
  tl.fromTo(splitTitle.words,
    { scale: 0 },
    {
      duration:duration,
      scale: 3,
      ease: "slow(0.1, 2)",
      stagger: duration
    }
  )
    .from(splitTitle.words,
      {
        duration:duration,
        opacity:0,
        ease:"slow(0.1, 2, true)",
        stagger:duration
      }, "<"
    );
}

window.addEventListener("load", function(event) {
  console.log("load");
  gsap.set("#demo", { autoAlpha: 1 });
  init();
});

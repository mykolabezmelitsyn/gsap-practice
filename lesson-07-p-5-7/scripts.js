import {gsap} from "../src/libs/gsap.js";

gsap.to("#thin", {
  attr: {
    patternTransform: "scale(0.2) translate(40, 0)"
  },
  duration: 0.5, repeat: 20, ease: "none"
});

gsap.to("#wide", {
  attr: {
    patternTransform: "scale(5) translate(40, 0)"
  },
  duration: 5, repeat: 1, ease: "none"
});


gsap.to("#rotate", {
  attr: {
    patternTransform: "rotate(45) translate(40, 0)"
  },
  duration: 1, repeat: 10, ease: "none"
});

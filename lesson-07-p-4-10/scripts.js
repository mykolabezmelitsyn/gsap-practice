import {gsap, Draggable} from "../src/libs/gsap.js";

Draggable.create("#dragger", {
  onDrag: function(){
    console.log(this.x)
    gsap.set("#mask", {
      x:this.x,
      y:this.y
    })
  }
})

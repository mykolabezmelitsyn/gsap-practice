# GSAP practical handbook: beginner to advanced

For a JavaScript developer learning landing-page animation, scroll effects, interactive interfaces, and SVG. Work through the essential chapters first; use the specialized chapters when a project needs them. Expertise comes from building, diagnosing, and maintaining projects, rather than memorizing methods.

Verified on October 20, 2026 against official documentation. This workspace has **GSAP 3.15.0** installed. Examples target modern GSAP 3 and a browser with ES modules through Vite. They are independent examples unless explicitly connected.

## Contents

1. Foundations and setup
2. Tweens and animation state
3. Timing, easing, and stagger
4. Timelines and playback
5. Interaction
6. Scroll animation
7. Responsive motion and lifecycle
8. SVG
9. Text, layout, and other plugins
10. Performance and accessibility
11. Debugging and verification
12. Maintainable projects
13. Advanced techniques and learning milestones

## 1. Foundations and setup — essential

GSAP is a JavaScript animation engine. It interpolates values: calculates intermediate values between a start and an end over time. CSS still defines your page's layout; JavaScript decides when animation starts and how it is controlled.

Before learning the library, understand selectors, objects, functions, event listeners, CSS transforms, opacity, positioning, and document flow. You do not need a framework. Use a CSS transition for a simple independent hover effect when that is sufficient; reach for GSAP when you need sequencing, interruption, scroll control, or coordinated elements.

Your project already includes GSAP and Vite:

```sh
npm run dev
```

For a new project, install with `npm install gsap`. Import only what you use:

```js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
console.log(gsap.version);
```

A plugin adds a capability to the engine. Registration connects it to GSAP. Core CSS animation does not require importing CSSPlugin separately in this standard setup. Browser script tags and bundler imports are different installation approaches: avoid mixing multiple copies of GSAP.

Current plugins are available through the public npm package; older private-registry and paid-membership instructions are outdated. [Official installation instructions](https://gsap.com/docs/v3/Installation/).

GSAP and formerly paid plugins are available at no charge for commercial projects under its standard license. This is a specific license, not an unrestricted MIT license: it includes restrictions concerning competing visual animation builders. Consult the actual terms for product distribution decisions. [Current standard license](https://gsap.com/community/standard-license/).

### First runnable exercise

Put this HTML in the page body, with the JavaScript in the module your page loads:

```html
<button class="move-button" type="button">Animate box</button>
<div class="box" aria-hidden="true"></div>
```

```css
.box {
  width: 64px;
  height: 64px;
  margin-top: 24px;
  background: coral;
  border-radius: 12px;
}
```

```js
import { gsap } from "gsap";

const movement = gsap.to(".box", {
  x: 160,
  rotation: 90,
  duration: 0.8,
  ease: "power2.out",
  paused: true,
});

document.querySelector(".move-button").addEventListener("click", () => {
  movement.restart();
});
```

Run code after elements exist, for example through a `<script type="module">`. The box moves visually; adjacent elements keep their original layout positions.

**Practice:** Change the distance and duration independently. Predict each result before running it.

## 2. Tweens and animation state — essential

A **tween** is one animation instruction affecting one or several targets. A target can be an element, selector, array, or plain object.

```js
gsap.to(".box", { x: 120, duration: 0.6 });
gsap.from(".heading", { y: 24, opacity: 0, duration: 0.6 });
gsap.fromTo(".badge", { scale: 0.8 }, { scale: 1, duration: 0.4 });
gsap.set(".decoration", { rotation: -10 });
```

| Method | Start | End |
| --- | --- | --- |
| `to` | Current state | Values you provide |
| `from` | Values you provide | Existing state |
| `fromTo` | Explicit values | Explicit values |
| `set` | No interpolation | Apply values immediately |

Use `from` for entrances into a well-designed CSS resting state. If CSS already gives the heading `opacity: 0`, a `from` tween starting at zero will not reveal it. Keep base content visible or supply an explicit end state deliberately.

### Properties worth learning first

| Property | Meaning |
| --- | --- |
| `x`, `y` | Translation; numeric values use pixels for CSS transforms |
| `xPercent`, `yPercent` | Translation relative to the target's own dimensions |
| `rotation`, `scale`, `scaleX`, `scaleY` | Transform components |
| `transformOrigin` | Pivot, such as `"50% 50%"` |
| `opacity` | Transparency; zero does not remove keyboard focusability |
| `autoAlpha` | Combines opacity with visibility at zero |
| `duration`, `delay`, `ease` | Playback settings, not CSS properties |

Transforms compose on an element. For separate animation responsibilities, wrappers help: animate a card wrapper for entry and an inner element for hover. Avoid a CSS transition and GSAP both writing the same property on the same node.

Relative values such as `x: "+=40"` add to an existing value. Repeatedly launching a relative animation can accumulate movement; explicit destinations are often easier to reason about for interface states.

**Common trap:** `from` and `fromTo` can apply their starting values immediately. If a future timeline step unexpectedly changes an element early, inspect initialization and consider `immediateRender: false` on the relevant tween. It is a targeted fix, not a setting to add everywhere.

**Practice:** Explain why `from(".title", { opacity: 0 })` needs a visible destination.

References: [to](https://gsap.com/docs/v3/GSAP/gsap.to()/), [from](https://gsap.com/docs/v3/GSAP/gsap.from()/), [fromTo](https://gsap.com/docs/v3/GSAP/gsap.fromTo()/), [CSS properties](https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/).

## 3. Timing, easing, and stagger — essential

**Duration** is how long one tween takes in seconds. **Easing** maps progress to movement: it determines acceleration and deceleration. **Stagger** offsets the starts of multiple targets.

```js
gsap.from(".feature-card", {
  y: 24,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.08,
});
```

Start with three eases: `power2.out` for arrivals, `power2.inOut` for balanced travel, and `none` for linear movement. Use elastic and bouncing motion sparingly when it supports the interface's character.

Six cards with duration 0.6 and stagger 0.08 finish after `0.6 + 5 × 0.08 = 1` second, excluding other delays. For larger groups, an object stagger can distribute starts over a total interval:

```js
gsap.from(".tile", {
  scale: 0.9,
  opacity: 0,
  duration: 0.4,
  stagger: { amount: 0.5, from: "center" },
});
```

`repeat: 1` means one additional iteration. `repeat: -1` means indefinite repetition. `yoyo: true` alternates direction on repetitions; it does not create a repeat by itself. `repeatDelay` inserts a pause between iterations.

**Practice:** Make three cards appear in reverse order without changing the DOM order.

References: [easing](https://gsap.com/docs/v3/Eases/), [staggers](https://gsap.com/resources/getting-started/Staggers/).

## 4. Timelines and playback — essential

A **timeline** holds tweens on a shared clock. Its **playhead** is the current playback position. Use it whenever several pieces must move together.

```js
const hero = gsap.timeline({
  defaults: { duration: 0.6, ease: "power2.out" },
});

hero
  .from(".hero-title", { y: 30, opacity: 0 })
  .from(".hero-copy", { y: 20, opacity: 0 }, "-=0.2")
  .addLabel("action")
  .from(".hero-cta", { scale: 0.95, opacity: 0 }, "action")
  .from(".hero-art", { x: 30, opacity: 0 }, "action");
```

The optional final argument is a **position parameter**:

| Position | Placement |
| --- | --- |
| Omitted | Current timeline end |
| `0` | Absolute time zero |
| `"-=0.2"` | 0.2 seconds before the current end |
| `"<"` | Start of the most recently added animation |
| `">"` | End of the most recently added animation |
| `"action"` | Named label position |
| `"action+=0.2"` | Offset from a label |

Labels express meaning; local defaults keep a sequence consistent. A nested timeline is a sequence inserted into another timeline, useful for reusable scenes.

```js
hero.pause();
hero.play();
hero.reverse();
hero.restart();
hero.seek("action");
hero.progress(0.5); // normalized progress within one iteration
hero.timeScale(0.5); // half-speed playback
```

For repeating animations, `totalProgress()` includes repeats. Callbacks such as `onStart` and `onComplete` run at lifecycle points; avoid expensive DOM operations in an `onUpdate` callback, which runs repeatedly while updating.

**Practice:** Insert artwork halfway through the first tween, then slow down the entire sequence without editing its child durations.

Reference: [timeline and playback](https://gsap.com/docs/v3/GSAP/Timeline/).

## 5. Interaction — essential

An interaction has semantic state, input handling, and visual feedback. Keep the state meaningful even when motion is disabled.

For a native toggle button containing a decorative `.icon`:

```js
const button = document.querySelector(".toggle");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let active = false;

function toggle() {
  active = !active;
  button.setAttribute("aria-pressed", String(active));
  gsap.to(button.querySelector(".icon"), {
    rotation: active ? 45 : 0,
    duration: reduceMotion.matches ? 0 : 0.2,
    overwrite: "auto",
  });
}

button.setAttribute("aria-pressed", "false");
button.addEventListener("click", toggle);
// On teardown: button.removeEventListener("click", toggle);
```

`overwrite: "auto"` resolves competing active tweens of the same target properties. An alternative is one paused timeline controlled with `play()` and `reverse()`; this works especially well for coordinated open/close transitions.

For hover feedback, provide keyboard focus feedback too. Use real buttons rather than click handlers on generic containers. Menus, accordions, and dialogs need their own focus and semantic behavior beyond an animation.

**Advanced:** `gsap.quickTo()` returns a reusable function for frequently updated values such as a decorative pointer follower. Avoid allocating a new tween on every pointer event when a reusable update suffices. Pointer-only interaction needs a touch/keyboard alternative.

**Practice:** Click rapidly while a transition runs. Does it resolve to the intended state?

References: [overwrite and tween options](https://gsap.com/docs/v3/GSAP/gsap.to()/), [quickTo](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/).

## 6. Scroll animation — essential first, pinning later

Register ScrollTrigger before these examples. A reveal plays by time after crossing a position:

```js
gsap.utils.toArray(".reveal").forEach((element) => {
  gsap.from(element, {
    y: 24, opacity: 0, duration: 0.6,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      once: true,
      markers: true,
    },
  });
});
```

`start` pairs a trigger position with a viewport position. Here, the element's top reaches 85% down the viewport. Remove development markers before release.

**Scrubbing** maps scrolling to animation progress:

```js
const story = gsap.timeline({
  scrollTrigger: {
    trigger: ".story",
    start: "top top",
    end: "+=800",
    scrub: 0.5,
  },
});
story.to(".story-art", { x: 120, ease: "none" });
```

The 800-pixel interval controls progression; numeric scrub smooths catching up. Attach one ScrollTrigger to the parent timeline rather than giving its children competing scroll controllers.

For reversible time-based reveals, `toggleActions: "play none none reverse"` handles entering, leaving, entering backward, and leaving backward respectively.

**Advanced:** `pin: true` holds the trigger during its interval. Animate a child rather than the pinned container. Build pins in document order; their spacing affects later measurements. `snap` can settle progress at chosen positions; introduce it only when it improves navigation.

`ScrollTrigger.refresh()` recalculates layout measurements after meaningful changes such as newly loaded content. `update()` updates against existing measurements. Function-based values with `invalidateOnRefresh: true` help responsive calculations.

**Practice:** Build one reveal and one scrub, then explain why backward scrolling affects them differently.

Reference: [ScrollTrigger options, pinning, and refresh](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).

## 7. Responsive motion and lifecycle — essential for production

A **lifecycle** is the sequence of setup, use, and removal of a view. Cleanup prevents duplicate behavior and stale animations.

```js
const mm = gsap.matchMedia();

mm.add({
  desktop: "(min-width: 900px)",
  mobile: "(max-width: 899px)",
  reduce: "(prefers-reduced-motion: reduce)",
}, (context) => {
  const { desktop, reduce } = context.conditions;
  if (reduce) return; // base CSS leaves content visible

  gsap.from(".hero-art", {
    y: desktop ? 60 : 20,
    opacity: 0,
    duration: 0.7,
  });
});

// When removing the view: mm.revert();
```

When conditions change, matching setups are reverted and rebuilt. Keep responsive layout in CSS; use queries to adjust motion that depends on the layout. This API requires GSAP 3.11+.

Use `gsap.context()` to scope selectors and collect animations for teardown. Animations created later in events must be explicitly brought into the context, as shown in chapter 12. `context.revert()` restores animation-managed state; it does not automatically remove your DOM listeners or cancel your timers.

`kill()` stops an animation without necessarily restoring its original styles. `revert()` restores pre-animation state. Choose based on whether you are interrupting behavior or dismantling a view.

**Practice:** Cross a breakpoint repeatedly, then remove and recreate the view. Check for duplicate listeners and animations.

References: [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/), [context](https://gsap.com/docs/v3/GSAP/gsap.context()/), [revert](https://gsap.com/docs/v3/GSAP/Tween/revert()/).

## 8. SVG — essential basics, specialized effects later

Inline SVG exposes shapes to selectors. An SVG used as an `<img>` does not expose its internal paths to ordinary page selectors. A `viewBox` defines the illustration's coordinate space; its units may differ from screen pixels.

```html
<svg viewBox="0 0 200 100" aria-hidden="true">
  <g class="orb">
    <circle class="dot" cx="40" cy="50" r="12" fill="coral" />
  </g>
</svg>
```

```js
gsap.to(".dot", { attr: { cx: 160 }, duration: 1 });
gsap.to(".orb", {
  rotation: 20,
  transformOrigin: "50% 50%",
  duration: 0.8,
});
```

`attr` animates attributes; transforms move rendered geometry. Group related parts so you can animate the whole illustration and individual pieces independently.

### Draw a stroke — specialized

```js
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
gsap.from(".outline", { drawSVG: "0%", duration: 1.2 });
```

Use a path with a visible stroke, typically `fill="none"`. Drawing changes stroke visibility, not a filled shape's silhouette. [DrawSVG documentation](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/).

### Follow a path — specialized

```js
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
gsap.to(".vehicle", {
  duration: 3,
  ease: "none",
  motionPath: {
    path: "#route",
    align: "#route",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
});
```

Use a vehicle and route in a compatible SVG scene. Alignment settings relate their coordinate systems; rotation follows the path's tangent. [MotionPath documentation](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/).

### Morph a shape — specialized

```js
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);
gsap.to("#shape-a", { morphSVG: "#shape-b", duration: 0.8 });
```

Start with two paths; hide the destination reference path if it should not render separately. Non-path primitives may need conversion. Complex point mapping requires visual tuning. [MorphSVG documentation](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/).

**Practice:** Animate an inline illustration using a timeline before attaching it to scrolling.

## 9. Text, layout, and other plugins — learn as needed

### SplitText: words, characters, and lines

SplitText wraps text into animatable pieces. Line breaks depend on fonts and width, so responsive text must be handled deliberately.

```js
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const split = SplitText.create(".headline", {
  type: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
    });
  },
});
// On teardown: split.revert();
```

This `onSplit` workflow requires **3.13+**. Returning the animation lets SplitText manage it across re-splits. Use the default accessibility handling thoughtfully: nested links or other meaningful inline markup require extra care and testing. Run this decorative effect only when reduced motion permits it. [SplitText and version details](https://gsap.com/docs/v3/Plugins/SplitText/).

### Flip: animate layout changes

FLIP means **First, Last, Invert, Play**: measure before a layout change, apply the final layout, then animate from the old visual state to the new one.

```js
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

function changeLayout() {
  const state = Flip.getState(".grid-card");
  document.querySelector(".grid").classList.toggle("is-list");
  Flip.from(state, { duration: 0.6, ease: "power2.inOut" });
}
```

Define both layouts in CSS and connect this function to a control. Start with a stable collection of elements; entering, leaving, and reparented elements introduce more advanced state management. [Flip documentation](https://gsap.com/docs/v3/Plugins/Flip/).

### Plugin selection map

| Plugin | Useful when | Priority |
| --- | --- | --- |
| ScrollTrigger | Viewport entry and scroll-controlled sequences | Essential for your goals |
| SplitText | Text needs per-line, word, or character movement | Common enhancement |
| Flip | Elements change layout or containers | Intermediate |
| DrawSVG / MorphSVG / MotionPath | Stroke drawing, morphing, route following | Specialized SVG |
| ScrollToPlugin | Programmatically animate a scroll position | Optional navigation tool |
| Draggable | Pointer/touch dragging with bounds | Specialized interaction |
| InertiaPlugin | Momentum after an interaction | Advanced; complements dragging |
| Observer | Normalize wheel, pointer, and touch input | Advanced input systems |
| ScrollSmoother | Add a smoothed scrolling presentation | Optional; requires ScrollTrigger and specific markup |
| CustomEase | Standard easing cannot express the motion | Advanced polish |
| GSDevTools | Inspect and control animation playback visually | Optional debugging |

Each is a separate capability; import/register what its documentation requires. ScrollTrigger does not itself provide smooth scrolling. Observer and Draggable do not supply full keyboard accessibility automatically. See the [official plugin directory](https://gsap.com/docs/v3/Plugins/) for individual requirements.

## 10. Performance and accessibility — essential

### Understand the browser's work

**Layout** computes element sizes and positions. **Paint** draws visual content. **Compositing** combines rendered layers. Changing width or top may cause layout; transforms and opacity are usually better starting points for frequent movement, but expensive content can still make them slow.

Measure a real interaction with the browser's Performance panel. Look for long tasks, repeated layout, expensive painting, and frame drops. Test with realistic images and text on a slower phone, not just an empty desktop demo.

Practical habits:

- Prefer transforms and opacity for routine movement.
- Avoid reading geometry immediately after repeatedly writing styles in tight loops; group reads and writes.
- Reduce large blur/filter effects and oversized moving layers when profiling identifies them as expensive.
- Limit simultaneous animated elements; a huge character split can create substantial DOM work.
- Use `will-change` selectively and temporarily; unnecessary layers consume memory.
- Avoid permanent `onUpdate` logging and avoid layout measurements every animation frame.
- Load only needed plugins and stop obsolete animation loops.

These are browser-performance principles, not guarantees that any particular property will be fast. [Browser animation performance guidance](https://web.dev/articles/animations-guide).

### Preserve usability

The page must remain understandable without decorative movement. Start with visible, readable content and progressively enhance it.

Honor `prefers-reduced-motion`; skip parallax, large translations, and indefinite decorative loops where appropriate. A zero-duration jump is sometimes suitable for state feedback, but may be inappropriate for scroll-pinned storytelling: provide a simpler flow.

Opacity zero alone leaves controls potentially focusable. Use semantic state, `hidden`, `inert`, or appropriate visibility handling according to the component. Do not assume a fade implements focus management. Preserve meaningful reading order and keyboard focus, avoid flashing, and provide pause controls for ongoing motion where required.

For an essential diagram, keep an accessible description independent of its visual animation. For decorative SVG, `aria-hidden="true"` is appropriate. [Reduced-motion reference](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [WAI animation guidance](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html).

**Practice:** Disable animation setup entirely, then use only the keyboard. Identify what still depends on motion to work.

## 11. Debugging and verification — essential

Debug the smallest reproducible case: one target, one tween, plain visible CSS. Reintroduce a timeline, then an event or scroll controller, then responsive setup.

| Symptom | First checks |
| --- | --- |
| Nothing moves | Console errors, target exists, correct selector, module loaded |
| Plugin property is ignored | Correct import, registration, one GSAP instance |
| Element never appears | CSS destination, ancestor visibility, `from` state, `hidden` attribute |
| Unexpected early jump | `from`/`fromTo` initialization and `immediateRender` |
| Jitter on repeated interaction | Multiple owners of a property, accumulated listeners, overlapping tweens |
| Scroll timing is wrong | Markers, trigger choice, start/end, late fonts/images, refresh |
| Pin jumps or overlaps | Parent transforms, pin spacing, creation order, animated pinned node |
| Works once, breaks after navigation | Missing teardown or setup running twice |
| SVG rotates around wrong point | Group structure, transform origin, coordinate system |
| Mobile horizontal overflow | Translated elements, oversized art, layout width |

Useful inspection:

```js
console.log(document.querySelectorAll(".box").length);
console.log(gsap.getProperty(".box", "x"));
console.log(gsap.getTweensOf(".box"));
console.log(ScrollTrigger.getAll().length);
hero.pause().progress(0.5);
```

Use a stored animation reference instead of guessing what is active. Slow playback with `timeScale(0.2)` to inspect ordering. Compare trigger counts before and after teardown; do not indiscriminately kill every trigger in a shared application.

### Verify behavior, not just compilation

A successful Vite build detects bundling issues but cannot establish animation correctness. Manually test initial load, reload midway down the page, scrolling both directions, rapid inputs, resizing, reduced motion, keyboard navigation, and mount/unmount cycles.

Automated browser tests are valuable for meaningful contracts: a toggle's final state after rapid clicks, cleanup after navigation, and content visibility under reduced motion. Avoid asserting fragile intermediate pixel positions unless the visual geometry is the actual requirement.

## 12. Maintainable projects — intermediate

Use one setup function per section/component that returns a cleanup function. Keep CSS responsible for the resting layout, keep interaction state explicit, and give animations a clear owner.

This pattern scopes selection, adapts to motion preference changes, and captures animations created later by click handlers:

```js
import { gsap } from "gsap";

export function mountFeature(root) {
  const button = root.querySelector(".toggle");
  const icon = root.querySelector(".icon");
  if (!button || !icon) return () => {};

  let active = button.getAttribute("aria-pressed") === "true";
  let duration = 0.2;
  const mm = gsap.matchMedia();

  const ctx = gsap.context((self) => {
    self.add("render", () => {
      gsap.to(icon, {
        rotation: active ? 45 : 0,
        duration,
        overwrite: "auto",
      });
    });
  }, root);

  mm.add({
    reduce: "(prefers-reduced-motion: reduce)",
    full: "(prefers-reduced-motion: no-preference)",
  }, (media) => {
    duration = media.conditions.reduce ? 0 : 0.2;
    ctx.render();
  });

  function onClick() {
    active = !active;
    button.setAttribute("aria-pressed", String(active));
    ctx.render();
  }
  button.addEventListener("click", onClick);

  return () => {
    button.removeEventListener("click", onClick);
    mm.revert();
    ctx.revert();
  };
}
```

Call the returned function when the component is removed. The root must contain a native toggle button and decorative icon. `ctx.render()` is a named context function created with `add`; this is how later-created tweens join its cleanup scope. See [context methods and delayed creation](https://gsap.com/docs/v3/GSAP/gsap.context()/).

A practical structure as the project grows:

```text
src/
  main.js
  animations/
    hero.js
    features.js
    story.js
  styles/
    main.css
```

Keep plugin registration centralized, use local timeline defaults, and extract patterns after repetition appears. Avoid hiding every tween behind a complex abstraction while learning.

In a framework, tie setup and teardown to its lifecycle. React projects can use the separately installed `@gsap/react` integration and `useGSAP()`; event-created animations still need appropriate context handling. Your vanilla project does not require it. [Official React integration](https://gsap.com/resources/React/).

## 13. Advanced techniques and learning milestones

### Dynamic values and invalidation

Function-based values defer calculation, for example `x: () => container.clientWidth - item.offsetWidth`. This matters when dimensions change. Cached animation values may need invalidation; scroll-driven animation can combine dynamic values with `invalidateOnRefresh`. Avoid rebuilding everything on every scroll event.

### Objects, canvas, and rendering systems

GSAP can tween numeric object properties independently of DOM styling:

```js
const state = { value: 0 };
gsap.to(state, {
  value: 100,
  duration: 1,
  onUpdate() {
    output.textContent = Math.round(state.value);
  },
});
```

Here `output` must reference an existing display element. Canvas/WebGL follows the same idea, but your renderer draws the scene. Profile rendering cost separately from tween computation.

### Composition and utilities

Use nested timelines and labels for scenes. Learn `gsap.utils.clamp`, `mapRange`, and `wrap` when interaction values need limits or conversion. Explore `gsap.ticker` only when coordinating a custom frame loop; remove callbacks during teardown. Investigate `resetTo`, modifiers, physics, and custom easing when a specific design demands them. [Core API and utilities](https://gsap.com/docs/v3/GSAP/).

### Learning progression with evidence

| Stage | Project | Evidence you are ready to move on |
| --- | --- | --- |
| Beginner | Hero with three elements and a card stagger | Explain start/end state, duration, and overlap |
| Confident beginner | Reversible toggle and section reveals | Handle rapid input and explain trigger positions |
| Intermediate | Responsive landing page with SVG and scrubbed scene | Support reduced motion and resize without duplicates |
| Advanced | Layout transition, responsive text, reusable sections | Diagnose geometry changes and implement complete teardown |
| Expert practice | Maintain a real production animation system | Profile bottlenecks, choose simpler alternatives, verify accessibility, and safely change behavior |

For each project, describe the intended behavior before writing code, build the static layout, animate one element, coordinate the sequence, connect input, then verify lifecycle and accessibility. Rebuild one effect without a tutorial to expose gaps in understanding.

### Final implementation checklist

- Every animation supports a clear reading or interaction purpose.
- Static content and keyboard behavior work before decoration is added.
- Timelines express sequencing without scattered timeout chains.
- Scroll start/end positions are intentional and tested after layout changes.
- Reduced-motion and mobile behavior are designed, not incidental.
- Each animated property has a clear owner.
- Setup has matching teardown; event-created animations are captured.
- Performance is measured on realistic content and hardware.
- Plugins, versions, and dependencies are documented and locked.

Keep the fundamentals close: **state → tween → timing → timeline → controller → lifecycle**. Specialized effects build on that same chain.

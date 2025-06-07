import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import "./style.css";

gsap.registerPlugin(SplitText);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="lula">
    <h1 class="split">Lula Mungula</h1>
  </section>
  <section class="elmi">
    <h1 class="split">Elmi fea</h1>
  </section>
`;

const split = SplitText.create(".split", {
  type: "chars",
});

gsap.from(split.chars, {
  x: 150,
  opacity: 0,
  duration: 2,
  ease: "power4",
  stagger: 0.1,
});

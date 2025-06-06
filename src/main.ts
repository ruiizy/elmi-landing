import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import "./style.css";

gsap.registerPlugin(SplitText);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class="split">Lula Mungula</h1>
  </div>
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

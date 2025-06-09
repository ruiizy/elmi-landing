import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="lula">
    <h1 class="split">Lula Mungula</h1>
  </section>
  <section class="elmi">
    <h1 class="split">Elmi fea</h1>
  </section>
`;

function animateChars() {
  const sections = [
    {
      selector: ".lula",
      animation: {
        x: 150,
        opacity: 0,
        duration: 2,
        ease: "power4",
        stagger: 0.1,
      },
    },
    {
      selector: ".elmi",
      animation: {
        x: -150,
        opacity: 0,
        duration: 1.5,
        ease: "bounce.out",
        stagger: 0.05,
      },
    },
  ];

  sections.forEach((section) => {
    const split = SplitText.create(`${section.selector} .split`, {
      type: "chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.selector, // Each section triggers its own animation
        start: "top 80%",
        once: true,
      },
    });

    tl.from(split.chars, section.animation);
  });
}

animateChars();

animateChars();

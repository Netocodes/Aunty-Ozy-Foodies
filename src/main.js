import "./index.css";

// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

import { Collapse, Dropdown, initTWE } from "../tw-elements";

initTWE({ Collapse, Dropdown });

const text = "Taste the Quality, Cherish the Affordability";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function type() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // Adjust typing speed here
  } else {
    // Optional: Add a blinking cursor effect after typing is done
    typewriterElement.classList.add("animate-blink");
  }
}
type();

const sr = ScrollReveal();
sr.reveal(".reveal", {
  delay: 200,
  interval: 600,
  distance: "20px",
  easing: "ease-in",
  opacity: 0,
  reset: false,
  duration: 800,
});
sr.reveal(".scaleUp", {
  scale: 0.85,
  delay: 200,
  reset: false,
  interval: 600,
  distance: "20px",
  easing: "ease-in",
  opacity: 0,
});

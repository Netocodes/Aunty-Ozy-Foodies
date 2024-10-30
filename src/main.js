import "./index.css";

import { Ripple, Collapse, Dropdown, Input, initTWE } from "/tw-elements";

initTWE({ Ripple, Collapse, Dropdown, Input });

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the button
  const mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
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
    interval: 100,
    distance: "20px",
    easing: "ease-in",
    opacity: 0,
    reset: false,
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
});
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Show loader
    document.getElementById("loader").style.display = "flex";

    // Scroll to the target section after a brief delay
    const targetId = this.getAttribute("href");
    setTimeout(() => {
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      document.getElementById("loader").style.display = "none"; // Hide loader
    }, 500); // Adjust delay as needed
  });
});

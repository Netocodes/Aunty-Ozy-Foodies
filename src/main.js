import "./index.css";

// Toggle mobile menu visibility
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  const expanded =
    mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
  mobileMenuButton.setAttribute("aria-expanded", !expanded);
  mobileMenu.classList.toggle("hidden");
});

// Toggle profile dropdown visibility
const userMenuButton = document.getElementById("user-menu-button");
const userMenu = document.querySelector('[role="menu"]');

userMenuButton.addEventListener("click", () => {
  const expanded =
    userMenuButton.getAttribute("aria-expanded") === "true" || false;
  userMenuButton.setAttribute("aria-expanded", !expanded);
  userMenu.classList.toggle("hidden");
});

// Close dropdown when clicking outside
window.addEventListener("click", (event) => {
  if (
    !userMenuButton.contains(event.target) &&
    !userMenu.contains(event.target)
  ) {
    userMenu.classList.add("hidden");
    userMenuButton.setAttribute("aria-expanded", "false");
  }
});

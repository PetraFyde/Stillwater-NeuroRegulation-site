// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Ten second reset
const resetBtn = document.getElementById("resetBtn");
const resetText = document.getElementById("resetText");

if (resetBtn && resetText) {
  resetBtn.addEventListener("click", () => {
    resetText.textContent =
      "Inhale for 4. Exhale for 6. Drop your shoulders. Unclench your jaw. Let your eyes soften. Return to the next right step.";
  });
}

// Mobile nav
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = !mobileNav.hasAttribute("hidden");
    if (isOpen) {
      mobileNav.setAttribute("hidden", "");
      navToggle.setAttribute("aria-expanded", "false");
    } else {
      mobileNav.removeAttribute("hidden");
      navToggle.setAttribute("aria-expanded", "true");
    }
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileNav.setAttribute("hidden", "");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const locationBtn = document.getElementById("locationBtn");
const mapPopup = document.getElementById("mapPopup");

locationBtn.addEventListener("click", () => {
  const isOpen = mapPopup.classList.toggle("open");
  locationBtn.setAttribute("aria-expanded", isOpen);
});

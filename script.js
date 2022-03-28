// NAVBAR
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
let menuOpen = false;

toggleButton.addEventListener("click", (event) => {
  event.preventDefault();
  navbarLinks.classList.toggle("active");
  if (!menuOpen) {
    toggleButton.classList.add("open");
    menuOpen = true;
  } else {
    toggleButton.classList.remove("open");
    menuOpen = false;
  }
});

const navbar = document.querySelector(".navbar");
let offsetY = 100;

window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > offsetY) {
    navbar.classList.remove("active");
    navbarLinks.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
  offsetY = window.pageYOffset > 100 ? window.pageYOffset : 100;
});

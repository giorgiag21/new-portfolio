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
  if (window.pageYOffset > offsetY) {
    navbar.classList.remove("active");
    navbarLinks.classList.remove("active");
    toggleButton.classList.remove("open");
    menuOpen = false;
  } else {
    navbar.classList.add("active");
  }
  offsetY = window.pageYOffset > 100 ? window.pageYOffset : 100;
});

const contactIcon = document.querySelectorAll(".contact-icon");
console.log(contactIcon);

for (let i = 0; i < contactIcon.length; i++) {
  contactIcon[i].addEventListener("mouseover", () => {
    contactIcon[i].classList.add("fa-bounce");
  });
  contactIcon[i].addEventListener("mouseleave", () => {
    contactIcon[i].classList.remove("fa-bounce");
  });
}

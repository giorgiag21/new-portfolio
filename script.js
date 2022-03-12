const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const arrow = document.getElementsByClassName("arrow");
const viewWorkButton = document.getElementsByClassName("button");

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});

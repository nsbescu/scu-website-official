const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Function to close the menu
function closeMenu() {
  menu.classList.remove("is-active");
  menuLinks.classList.remove("active");
}

// Event listener to close the menu when the user scrolls
window.addEventListener("scroll", closeMenu);

// Event listener to change the state of the menu item when clicked
menu.addEventListener("click", function () {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
  menuLinks.classList.toggle("active");
});

const menu = document.querySelector(".menu-bars");
const header = document.querySelector("header");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.addEventListener("onscroll", () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
});

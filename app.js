var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "React Js Developer",
    "Js Programmer",
  ],
  typeSpeed: 50,
  loop: true,
});

let header = document.querySelector(".header");

let btn = document.querySelector(".mobile-navbar-btn");

btn.addEventListener("click", () => {
  header.classList.toggle("active");
});

let nav_links = document.querySelectorAll(".navbar-link");

Array.from(nav_links).forEach((e) => {
  e.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});

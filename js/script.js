let navbar = document.querySelector(".header .navbar");
let menu = document.querySelector("#menu-btn");

menu.onclick = () => {
  // them nut X
  menu.classList.toggle("fa-times");
  // them class active
  navbar.classList.toggle("active");
};

let cart = document.querySelector(".cart-items-container");
let overlay = document.querySelector(".overlay");
document.querySelector("#cart-btn").onclick = () => {
  cart.classList.add("active");
  overlay.classList.toggle("active");
};

document.querySelector("#close-form").onclick = () => {
  cart.classList.remove("active");
  overlay.classList.toggle("active");
};
document.querySelector(".overlay").onclick = () => {
  cart.classList.remove("active");
  overlay.classList.toggle("active");
};
var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  cnteredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

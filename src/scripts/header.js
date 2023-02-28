window.addEventListener("DOMContentLoaded", (event) => {
  let hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function () {
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    let headerHeight = document.querySelector(".section-header");
    headerHeight.classList.toggle("active");
  };
});

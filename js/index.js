import "animate.css";
import "../css/style.scss";

// console.log("javascript works in public area....");

const navRef = document.querySelector("nav");
const divRef = document.querySelector("header > div");

divRef.onclick = function () {
  navRef.classList.toggle("open");
  navRef.classList.toggle("animate__animated");
  navRef.classList.toggle("animate__bounce");
};

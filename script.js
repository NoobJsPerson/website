const themes = localStorage.getItem("theme");
if (!themes) {
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("theme","dark")
} else document.documentElement.setAttribute("theme", theme);
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const p = document.querySelectorAll("p");
const a = document.querySelectorAll("a");
function changeMode() {
  let wanted = localStorage.getItem("theme") == "dark" ? "light" : "dark"
  document.documentElement.setAttribute("theme", wanted)
  localStorage.setItem("theme", wanted);
}
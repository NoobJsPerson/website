const theme = localStorage.getItem("theme");
if (!theme) {
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("theme","dark")
} else document.documentElement.setAttribute("theme", theme);

function changeMode() {
  let wanted = localStorage.getItem("theme") == "dark" ? "light" : "dark"
  document.documentElement.setAttribute("theme", wanted)
  localStorage.setItem("theme", wanted);
}
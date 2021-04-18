console.log(
 "The Website Has been started on",
 location.host);
const body = document.querySelector(
 'body');
const p = document.querySelectorAll(
 "p")
let isBlackmode = true;

function changeMode() {
 if (isBlackmode) {
  body.style.background = "white";
  body.style.color = "black";
 } else {
  body.style.background = "black";
  body.style.color = "white";
 }
 isBlackmode = !isBlackmode;
}
console.log(
 "The Website Has been started on",
 location.host);
const body = document.querySelector(
 'body');
const p = document.querySelectorAll(
 "p")
let isBlackmode = true;

function changeMode() {
  body.style.background = isBlackmode ? "white" : "black";
  body.style.color = isBlackmode ? "black" : "white";
 isBlackmode = !isBlackmode;
}
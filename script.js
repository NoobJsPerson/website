const body = document.querySelector('body');

 const h1 = document.querySelector('h1');

const p = document.querySelectorAll(

 "p");

const a = document.querySelectorAll("a");

let isBlackmode = true;



function changeMode() {

  let colors = [isBlackmode ? "black" : "white",isBlackmode ? "black" : "cyan"]

  body.style.background = isBlackmode ? "linear-gradient(-135deg,white,gray,gray)" : "linear-gradient(-135deg,gray,black,black)";

  body.style.color = colors[0];

  h1.style.color = colors[1];

  a.forEach(x => x.style.color = colors[1]);

  p.forEach(x => x.style.borderColor = colors[0]);

 isBlackmode = !isBlackmode;

}


import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //arrays con elementos
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  //eligiendo elementos aleatoriamente
let rndm1 = who[Math.floor(Math.random()*who.length)] + " ";
let rndm2 = action[Math.floor(Math.random()*action.length)] + " ";
let rndm3 = what[Math.floor(Math.random()*what.length)] + " ";
let rndm4 = when[Math.floor(Math.random()*when.length)] + ".";
  //enviando al HTML mediante id = excuse
  document.querySelector("#excuse").innerHTML = rndm1 + rndm2 + rndm3 + rndm4;
};
window.onload = function() {
    excuseGenerator();
 };
 
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

const excuse = document.getElementById("excuse");

function randomNumber (arr) {
    let max = arr.length;
    return Math.floor(Math.random() * max);  
}

function excuseGenerator () {
  excuse.innerText = who[randomNumber(who)] + " " + action[randomNumber(action)] + " " + what[randomNumber(what)] + " " + when[randomNumber(when)];
}

const excuseGeneratorButton = document.getElementById("excuseGeneratorButton");

excuseGeneratorButton.addEventListener("click", function(event){
    event.preventDefault();
    excuseGenerator();
})

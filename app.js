let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

const excuse = document.getElementById("excuse");

function randomNumber (arr) {
    max = arr.length;
    return Math.floor(Math.random() * max);  
}

function excuseGenerator (who, action, what, when) {
    return who[randomNumber(who)] + " " + action[randomNumber(action)] + " " + what[randomNumber(what)] + " " + when[randomNumber(when)];
}

window.onload = function() {
   excuse.innerText = excuseGenerator(who, action, what, when);
};
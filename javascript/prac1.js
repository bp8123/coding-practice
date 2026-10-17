//26/09/2026
const name = " sam ";

const cleanName = name.trim().toLowerCase();

const char = cleanName.length;

const outline = "=";

const playerMsg = "Player: " + cleanName;
const lenghtMsg = "Lenght: " + char + " characters";
let dynamicOutline;
if (lenghtMsg.length >= playerMsg.length){
    dynamicOutline = lenghtMsg.length;
}else{
    dynamicOutline = playerMsg.length;
}

const fullOutline = outline.repeat(dynamicOutline);

console.log(fullOutline);
console.log(playerMsg);
console.log(lenghtMsg);
console.log(fullOutline);


const number1 = 50;
const number2 = 14.25;

console.log(typeof(number1));// number
console.log(typeof(number2));// number
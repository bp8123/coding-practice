//26/09/2026
const playerName1 = "    jOhn ";
const playerName2 = " Doe     ";
const attackDamage = 15;
const armorValue = 5;
let defenderHealth = 10;

const cleanPlayerName1 = playerName1.trim().toLowerCase();
const cleanPlayerName2 = playerName2.trim().toLowerCase();

const validName1= cleanPlayerName1.length >= 3 && cleanPlayerName1.length <= 16;
const validName2 = cleanPlayerName2.length >= 3 && cleanPlayerName2.length <= 16;

console.log(validName1);
console.log(validName2);

const reducedDamage = Math.max(0, attackDamage - armorValue);

let critHit;

const critRoll = Math.random()
if(critRoll >= 0.8) {
    critHit = Math.round(reducedDamage * 1.5);
}

defenderHealth -= critHit;

if(defenderHealth <= 0){
    console.log("The defender has been defeated!");
}else if(defenderHealth <= 5){
    console.log("Defender his health is critically low!");
}else{
    console.log("Defender his health stays normal.");
}
console.log(defenderHealth)
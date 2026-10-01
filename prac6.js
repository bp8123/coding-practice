//01/10/2026
let serverName = "test";
function cleanPlayerName(rawName){
    const cleanName = rawName.trim().toLowerCase();
    return cleanName;
}
function isValidName(cleanName){
    if(cleanName.length >= 3 && cleanName.length <= 16){
        return true;
    }else{
        return false;
    }
}
const calculateStat = (baseNum, baseMultiplier) => {
    let breakTest = 15;
    console.log(serverName);
    return Math.round(baseNum * baseMultiplier);
}
//console.log(breakTest);
function buildPlayerCard(name, health, damage, speed,){
    if(isValidName() === true){
        console.log(`Health: ${health}|
       Damage: ${damage}|
       Speed: ${speed}|`);
    }else{
        return "rejected";
    }
}

cleanPlayerName("  Steve_Builder123  ");
calculateStat(20, 1.2);
calculateStat(8, 1.5);
calculateStat(5, 1.0);
buildPlayerCard(cleanName, calculateStat);

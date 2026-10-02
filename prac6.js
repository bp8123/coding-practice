//02/10/2026

let rawName = "  bP8123 ";
let rawBal = "150.75";
let rawPurchase = "42.5";
let taxRate = 0.05;
function cleanName(rawName){
    return (rawName).trim().toLowerCase();
}
function isValidName(cleanName){
    if(cleanName >= 3 && cleanName <=16){
        return true;
    }else{
        return false;
    }
}
function parseAmount(ammount){
    if(isNaN(ammount)){
        return 0;
    }else{
        return parseFloat(ammount);
    }
}
const applyTax = (ammount) => { return Math.round(ammount * taxRate); };
function canAfford(balance, totalCost){
    if(balance >= totalCost){
        return true;
    }
}
function processPurchase(rawName, balance, rawPurchaseAmount){
    cleanName();
    isValidName();
    parseAmount();
    applyTax();
    canAfford();
    if(isValidName(rawName) === false){
        return "Your name is not valid!";
    }else if(canAfford(balance, (parseFloat(rawPurchaseAmount))) === false){
        return "Your balance is invalid!";
    }else{
        return "Succes!";
    }
}
console.log(processPurchase("bob", 100, 10));
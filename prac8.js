//06/10/2026

function cleanAndCheckName(rawName){
    const cleanedName = rawName.trim().toLowerCase();
    if(cleanedName.length >= 3 && cleanedName.length <= 16){
        return {
            cleanName: cleanedName,
            isValid: true,
        }
    }else{
        return{
            cleanName: cleanedName,
            isValid: false,
        }
    }
}
const convertCurrency = (amount, conversionRate) => {return Math.round(amount * conversionRate);};
function applytradeBonus(amount, vip){
    if(vip === true){
        return amount * 1.1;
    }else{
        return amount;
    }
}
function canCompleteTrade(currentGold, finalTradeCost){
    if(currentGold >= finalTradeCost){
        return true;
    }else if(currentGold <= finalTradeCost){
        return false;
    }
}
function processTrade(rawName, emeraldAmount, conversionRate, isVip, currentGold){
    const nameResult = cleanAndCheckName(rawName);

    if (!nameResult.isValid) {
        return `Trade rejected: "${nameResult.cleanName}" is not a valid name.`;
    }
    const converted = convertCurrency(emeralds, rate);
    const finalCost = applyTradeBonus(converted, isVip);

    if (canCompleteTrade(gold, finalCost)) {
        return `Trade successful for ${nameResult.cleanName}. Cost: ${finalCost} gold.`;
    } else {
        const shortBy = finalCost - gold;
        return `Trade failed for ${nameResult.cleanName}. You need ${shortBy} more gold.`;
    }
}
console.log(processTrade("  Steve_Trader  ", 20, 5, true, 200));
console.log(processTrade("  Jo  ", 20, 5, true, 200));
console.log(processTrade("  Steve_Trader  ", 20, 5, false, 50));
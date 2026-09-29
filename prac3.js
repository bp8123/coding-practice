//27/09/2026
const playerName = "    bP8123";
const rawDonation = "25.5";
const donation = parseFloat(rawDonation);
const isInvalidAmount = isNaN(donation);
const cleanPlayerName = playerName.trim().toLowerCase();
const blockedName = cleanPlayerName.includes("admin");
const isValidName = cleanPlayerName.length >= 3 && cleanPlayerName.length <= 16 && !blockedName;
const validDonation = Math.max(0, donation);
const displayDonation = validDonation.toFixed(2);
let rank;

if(displayDonation >= 50){
    rank = "Gold Donator"
}else if(displayDonation >= 20){
    rank = "Silver Donator"
}else{
    rank = "Bronze Donator"
}
const returningDonator = true;
let bonusEligible;
if(displayDonation >= 50 || isValidName && returningDonator){
    bonusEligible = true
}else{
    bonusEligible = false
}
const playerNameMsg = `Name: ${cleanPlayerName}`;
const validNameMsg = `Is the name valid? ${isValidName}`;
const invalidAmountMsg = `Is the Donation valid? ${!isInvalidAmount}`;
const formatDonationAmountMsg = `Donation Amount: ${displayDonation}`;
const displayRankMsg = `Rank: ${rank}`;
const displayBonusMsg = `Bonus: ${bonusEligible}`;


const longestLine = Math.max(
    playerNameMsg.length,
    validNameMsg.length,
    invalidAmountMsg.length,
    formatDonationAmountMsg.length,
    displayRankMsg.length,
    displayBonusMsg.length,
)
const outline = "=".repeat(longestLine);

console.log(outline);
console.log(playerNameMsg);
console.log(validNameMsg);
console.log(invalidAmountMsg);
console.log(formatDonationAmountMsg);
console.log(displayRankMsg);
console.log(displayBonusMsg);
console.log(outline);
//28/09/2026
const hoursRun = "3.5";
const mobsPerHour = "120";
const dropChance = "0.4";
let bonusMultiplier;
let farmName = null;

const numberHoursRun = parseFloat(hoursRun);
const numberDropChance = parseFloat(dropChance);
const numberMobsPerHour = parseInt(mobsPerHour);

const badNumberHoursRun = isNaN(numberHoursRun);
const badNumberDropChance = isNaN(numberDropChance);
const badMobsPerHour = isNaN(numberMobsPerHour);

const hasBadInput = badNumberHoursRun || badNumberDropChance || badMobsPerHour;
if(hasBadInput) {
    console.log("There is bad input in this.")
}else{
    console.log("")
}

if(bonusMultiplier === undefined){
    bonusMultiplier = 1;
}
if(farmName === null){
    farmName = "Unnamed Farm"
}

let totalMobs = hoursRun * mobsPerHour;
let totalDrops = Math.round(totalMobs * dropChance * bonusMultiplier);

let farmCycles = 0;
farmCycles++;
farmCycles++;
farmCycles++;
farmCycles++;
farmCycles++;

let totalItems = 0;
totalItems += totalDrops;
totalItems += totalDrops;
totalItems += totalDrops;
totalItems += totalDrops;
totalItems += totalDrops;

let hopperDurability = 0;
hopperDurability--;

let rating;

if(totalDrops > 1000){
    rating = "Elite"
}else if(totalDrops > 500){
    rating = "Gold"
}else if(totalDrops > 250){
    rating = "Bronze"
}else{
    rating = "Low"
}
let label;

if(rating !== "Low" && hoursRun >= 10) {
    label = true
}else{
    label = false;
}
const msg1 = `Farm: Zombie Grinder`;
const msg2 = `Hours Run: ${numberHoursRun}`;
const msg3 = `Total Mobs: ${totalMobs}`;
const msg4 = `Total Drops (per cycle): ${totalDrops}`;
const msg5 = `Total Items (5 cycles): ${totalItems}`;
const msg6 = `Rating: ${rating}`;
const msg7 = `Certified: ${label}`;

const longestLine = Math.max(
    msg1.length,
    msg2.length,
    msg3.length,
    msg4.length,
    msg5.length,
    msg6.length,
    msg7.length,
)
const outline = "=".repeat(longestLine)
let receipt = `${outline}
${msg1}
${msg2}
${msg3}
${msg4}
${msg5}
${msg6}
${msg7}
${outline}`;

if(hasBadInput === true){
    console.log("error")
}else{
    console.log(receipt)
}
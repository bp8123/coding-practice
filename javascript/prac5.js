//29/09/2026
const rawItemName = "     DiAmond_Sword   ";
const rawPrice = "45.5";
const stockCount = "7";
const quantity = 1;
const cleanItemName = rawItemName.trim().toLowerCase();
const isBannedItem = rawItemName.includes("banned");
const itemCode = cleanItemName.slice(0, 4);
const itemPrice = parseFloat(rawPrice);
const stockAmount = parseInt(stockCount);
const priceIsInvalid = isNaN(itemPrice);
const stockIsInvalid = isNaN(stockAmount);
const hasBadInput = (priceIsInvalid || stockIsInvalid);
let discountRate;
let sellerNote = null;

if(discountRate === undefined){
    discountRate = 0;
}
if(sellerNote === null){
    sellerNote = "No notes provided";
}
const validListing = cleanItemName.length >= 3 && cleanItemName.length <=20 && !isBannedItem;
const subtotal = Math.round(itemPrice * quantity);
const finalPrice = Math.round(subtotal - (subtotal * discountRate));
let priceTier;

if(finalPrice >= 100){
    priceTier = "Expensive";
}else if(finalPrice > 30){
    priceTier = "Mid-range";
}else{
    priceTier = "Cheap";
}

const isGoodDeal = priceTier !== "Expensive" && (stockAmount >=5 || discountRate >= 0);
let msg1 = `Item Name: ${cleanItemName}`;
let msg2 = `Item Code: ${itemCode}`;
let msg3 = `Price: ${finalPrice}`;
let msg4 = `Stock Amount: ${stockAmount}`;
let msg5 = `Seller Note: ${sellerNote}`;
let msg6 = `Price Tier: ${priceTier}`;
let msg7 = `GoodDeal: ${isGoodDeal}`;
let outlineLength = Math.max(
    msg1.length,
    msg2.length,
    msg3.length,
    msg4.length,
    msg5.length,
    msg6.length,
    msg7.length,
)
let outline = "=".repeat(outlineLength);

if(hasBadInput === true || validListing === false){
    console.log("The listing can't be posted.");
}else{
    console.log(`
    ${outline}
    ${msg1}
    ${msg2}
    ${msg3}
    ${msg4}
    ${msg5}
    ${msg6}
    ${msg7}
    ${outline}`);
}
//03/10/2026
let inventory = ["sword", "shield", "potion", "bow", "arrow"];
let bannedItems = ["tnt", "bedrock", "command_block"];

function addItem(inventory, newItem){
    if(bannedItems.includes(newItem)){
        return inventory;
    }else{
        inventory.push(newItem);
        return inventory;
    }
}
function findItem(inventory, itemName){
    if(inventory.indexOf(itemName) === -1){
        console.log("The item was not found.");
    }else{
        console.log(inventory.indexOf(itemName));
    }
}
function removeItemByName(inventory, itemName){
    const index = inventory.indexOf(itemName);
    if(index !== -1){
        inventory.splice(index, 1);
    }else{
        console.log("the item was not found.");
    }
}
function sortInventory(inventory){
    const sorted = inventory.sort();
    return sorted;
}
function reverseInventory(inventory){
    const reversed = inventory.reverse();
    return reversed;
}
function displayInventory(inventory){
    if(inventory === ""){
        console.log("The inventory is empty.");
    }else{
        console.log(inventory.join());
    }
}
console.log(addItem(inventory, "helmet"));
console.log(addItem(inventory, "tnt"));

findItem(inventory, "sword");
findItem(inventory, "diamond");

console.log(removeItemByName(inventory, "potion"));
-
console.log(inventory);

sortInventory(inventory);
displayInventory(inventory);

reverseInventory(inventory);
displayInventory(inventory);
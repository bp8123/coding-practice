//05/10/2026
const player = {
    username: "craftykid99",
    level: 12,
    inventory: ["sword", "shield", "torch", "bread"],
    stats: {
        health: 18,
        stamina: 7,
    },
    introduce: function () {
        return `Hi, I'm ${this.username} and I'm level ${this.level}.`;
    }
};

function getUsername(player) {
    return player.username;
}
function getUsernameBracket(player) {
    return player["username"];
}
function getStamina(player) {
    return player.stats.stamina;
}
function getFirstItem(player) {
    return player.inventory[0];
}
function hasInventoryItem(player, itemName) {
    return player.inventory.includes(itemName);
}
function hasStatsProperty(player, propName) {
    return player.stats.hasOwnProperty(propName);
}
function removeInventoryItem(player, itemName) {
    const index = player.inventory.indexOf(itemName);
    if (index !== -1) {
        player.inventory.splice(index, 1);
    }
    return player;
}
function removeStatProperty(player, propName) {
    delete player.stats[propName];
    return player;
}

const player2 = new Object();
player2.username = "zombieslayer";
player2.level = 5;
player2.inventory = ["bow", "arrow"];
player2.stats = { health: 20, stamina: 10 };

console.log(getUsername(player));
console.log(getUsernameBracket(player));
console.log(getStamina(player));
console.log(getFirstItem(player));
console.log(hasInventoryItem(player, "torch"));
console.log(hasInventoryItem(player, "diamond"));
console.log(hasStatsProperty(player, "health"));
console.log(hasStatsProperty(player, "mana"));
console.log(removeInventoryItem(player, "shield"));
console.log(removeStatProperty(player, "stamina"));
console.log(player.introduce());
console.log(player2);
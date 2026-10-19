const titleStats = document.querySelector("#title-stats");
const health = document.querySelector("#health");
const hunger = document.querySelector("#hunger");
const dayNumber = document.querySelector("#day-number");

const inventoryTitle = document.querySelector("#inventory-title");
const inventoryItems = document.querySelector("#inventory-items");

const mineBtn = document.querySelector("#minebtn");
const chopBtn = document.querySelector("#chopbtn");
const eatBtn = document.querySelector("#eatbtn");
const fightBtn = document.querySelector("#fightbtn");
const craftBtn = document.querySelector("#craftbtn");
const sleepBtn = document.querySelector("#sleepbtn");
const allButtons = [mineBtn, chopBtn, eatBtn, fightBtn, craftBtn, sleepBtn];

const logsTitle = document.querySelector("#logs-title");
const log = document.querySelector("#log");

const MAX_STAT = 20;
const MAX_STACK = 64;

const player = {
    health: 20,
    hunger: 20,
    dayNumber: 2,
    inventoryItems: {
        wood: 10,
        stone: 0,
        food: 0,
    },
};

const mobs = {
    zombie: {
        name: "Zombie",
        health: 20,
        damage: 5,
    },
    skeleton: {
        name: "Skeleton",
        health: 10,
        damage: 10,
    },
    spider: {
        name: "Spider",
        health: 5,
        damage: 2,
    },
};

const recipes = {
    pickaxe: { wood: 3, stone: 2 },
    sword: { wood: 1, stone: 2 },
    bed: { wood: 6, stone: 0 },
};

function updateDisplay() {
    health.textContent = `Health: ${player.health}`;
    hunger.textContent = `Hunger: ${player.hunger}`;
    dayNumber.textContent = `Day: ${player.dayNumber}`;

    inventoryItems.innerHTML = "";
    for (const item in player.inventoryItems) {
        const li = document.createElement("li");
        li.textContent = `${item}: ${player.inventoryItems[item]}`;
        inventoryItems.appendChild(li);
    }
}

function addLog(message) {
    log.textContent = message;
}

function addItem(name, amount) {
    const current = player.inventoryItems[name] ?? 0;
    player.inventoryItems[name] = Math.min(current + amount, MAX_STACK);
}

function gameOver(message) {
    player.health = Math.max(player.health, 0);
    player.hunger = Math.max(player.hunger, 0);
    addLog(`${message} You survived until day ${player.dayNumber}.`);
    allButtons.forEach((btn) => {
        btn.disabled = true;
    });
    updateDisplay();
}

function gather(resource) {
    const amount = Math.floor(Math.random() * 5) + 1;
    addItem(resource, amount);
    player.hunger -= 1;

    if (player.hunger <= 0) {
        gameOver("You starved to death.");
        return;
    }

    addLog(`You gathered ${amount} ${resource}.`);
    updateDisplay();
}

mineBtn.addEventListener("click", () => {
    gather("stone");
});

chopBtn.addEventListener("click", () => {
    gather("wood");
});

eatBtn.addEventListener("click", () => {
    if (player.inventoryItems.food < 1) {
        addLog("You have no food!");
        return;
    }
    if (player.hunger >= MAX_STAT) {
        addLog("You're not hungry.");
        return;
    }

    player.inventoryItems.food -= 1;
    player.hunger = Math.min(player.hunger + 4, MAX_STAT);
    addLog("You ate some food.");
    updateDisplay();
});

fightBtn.addEventListener("click", () => {

    const mobList = Object.values(mobs);
    const mob = mobList[Math.floor(Math.random() * mobList.length)];

    let mobHealth = mob.health;
    const hasSword = (player.inventoryItems.sword ?? 0) > 0;
    const playerDamage = hasSword ? 8 : 5;
    let damageTaken = 0;

    while (mobHealth > 0 && player.health > 0) {
        mobHealth -= playerDamage;

        if (mobHealth > 0) {
            player.health -= mob.damage;
            damageTaken += mob.damage;
        }
    }

    if (player.health > 0) {
        const foodDrop = Math.floor(Math.random() * 3) + 1;
        addItem("food", foodDrop);
        addLog(`You killed a ${mob.name}! You took ${damageTaken} damage and got ${foodDrop} food.`);
        updateDisplay();
    } else {
        gameOver(`A ${mob.name} killed you.`);
    }
});

craftBtn.addEventListener("click", () => {
    const choice = prompt("What do you want to craft? (pickaxe, sword, bed)");
    if (choice === null) return;

    const itemName = choice.trim().toLowerCase();
    const recipe = recipes[itemName];

    if (recipe === undefined) {
        addLog(`You don't know how to craft "${choice}".`);
        return;
    }

    for (const resource in recipe) {
        const have = player.inventoryItems[resource] ?? 0;
        if (have < recipe[resource]) {
            addLog(`Not enough ${resource}. You need ${recipe[resource]}, you have ${have}.`);
            return;
        }
    }

    for (const resource in recipe) {
        player.inventoryItems[resource] -= recipe[resource];
    }

    addItem(itemName, 1);
    addLog(`You crafted a ${itemName}!`);
    updateDisplay();
});

sleepBtn.addEventListener("click", () => {
    if ((player.inventoryItems.bed ?? 0) < 1) {
        addLog("You need a bed to sleep. Craft one first!");
        return;
    }

    player.dayNumber += 1;
    player.health = Math.min(player.health + 10, MAX_STAT);
    player.hunger -= 3;

    if (player.hunger <= 0) {
        gameOver("You starved in your sleep.");
        return;
    }

    addLog(`You slept through the night. It's now day ${player.dayNumber}.`);
    updateDisplay();
});

updateDisplay();
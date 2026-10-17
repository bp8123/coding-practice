let counterMsg = document.getElementById('counter');
let count = 0;
let box = document.getElementById("square");
const upgrades = [
    {
        name: "wooden pickaxe",
        cost: 100,
        power: 2,
    },
    {
        name: "stone pickaxe",
        cost: 200,
        power: 3,
    },
    {
        name: "iron pickaxe",
        cost: 400,
        power: 5,
    },
    {
        name: "diamond pickaxe",
        cost: 800,
        power: 8,
    },
];

const btnWood = document.getElementById("wooden-pickaxe");
const btnStone = document.getElementById("stone-pickaxe");
const btnIron = document.getElementById("iron-pickaxe");
const btnDiamond = document.getElementById("diamond-pickaxe");
const errorMsg = document.getElementById("errormsg-upgrades");
const successMsg = document.getElementById("successmsg-upgrades");
let typeOfPickaxe = "default";

function updateDisplay(){
    counterMsg.innerText = `Blocks mined: ${count}`;
}
function showMessage(element, text) {
    element.innerText = text;
    setTimeout(() => {
        element.innerText = "";
    }, 2000);
}

btnWood.addEventListener("click", function () {
    if (typeOfPickaxe === "wooden pickaxe" || typeOfPickaxe === "stone pickaxe" || typeOfPickaxe === "iron pickaxe" || typeOfPickaxe === "diamond pickaxe") {
        showMessage(errorMsg, "You already have a wooden pickaxe!");
    } else if (count >= upgrades[0].cost) {
        count = count - upgrades[0].cost;
        updateDisplay();
        showMessage(successMsg, "Successfully bought the Wooden pickaxe!");
        typeOfPickaxe = "wooden pickaxe";
    } else {
        showMessage(errorMsg, "You don't have enough blocks mined!");
    }
})

btnStone.addEventListener("click", function () {
    if (typeOfPickaxe === "stone pickaxe" || typeOfPickaxe === "iron pickaxe" || typeOfPickaxe === "diamond pickaxe") {
        showMessage(errorMsg, "You already have a stone pickaxe!");
    } else if (count >= upgrades[1].cost) {
        count = count - upgrades[1].cost;
        updateDisplay();
        showMessage(successMsg, "Successfully bought the Stone pickaxe!");
        typeOfPickaxe = "stone pickaxe";
    } else {
        showMessage(errorMsg, "You don't have enough blocks mined!");
    }
})

btnIron.addEventListener("click", function () {
    if (typeOfPickaxe === "iron pickaxe" || typeOfPickaxe === "diamond pickaxe") {
        showMessage(errorMsg, "You already have a iron pickaxe!");
    } else if (count >= upgrades[2].cost) {
        count = count - upgrades[2].cost;
        updateDisplay();
        showMessage(successMsg, "Successfully bought the Iron pickaxe!");
        typeOfPickaxe = "iron pickaxe";
    } else {
        showMessage(errorMsg, "You don't have enough blocks mined!");
    }
})

btnDiamond.addEventListener("click", function () {
    if (typeOfPickaxe === "diamond pickaxe") {
        showMessage(errorMsg, "You already have a diamond pickaxe!");
    } else if (count >= upgrades[3].cost) {
        count = count - upgrades[3].cost;
        updateDisplay();
        showMessage(successMsg, "Successfully bought the diamond pickaxe!");
        typeOfPickaxe = "diamond pickaxe";
    } else {
        showMessage(errorMsg, "You don't have enough blocks mined!");
    }
})

box.addEventListener("click", function() {
    if(typeOfPickaxe === "default"){
        count++;
        updateDisplay();
    }else if(typeOfPickaxe === "wooden pickaxe"){
        count = count + upgrades[0].power;
        updateDisplay();
    }else if(typeOfPickaxe === "stone pickaxe"){
        count = count + upgrades[1].power;
        updateDisplay();
    }else if(typeOfPickaxe === "iron pickaxe"){
        count = count + upgrades[2].power;
        updateDisplay();
    }else if(typeOfPickaxe === "diamond pickaxe"){
        count = count + upgrades[3].power;
        updateDisplay();
    }
})

const btnVillager = document.getElementById("villager");
const btnIronGolem = document.getElementById("iron-golem");
const btnEnderDragon = document.getElementById("ender-dragon");
const successMsgShop = document.getElementById("successmsg-shop");
const errorMsgShop = document.getElementById("errormsg-shop");

const autoMiners = [
    {
        name: "villager",
        cost: 500,
        production: 1,
        owned: 0,
    },
    {
        name: "iron-golem",
        cost: 1000,
        production: 10,
        owned: 0,
    },
    {
        name: "ender-dragon",
        cost: 2000,
        production: 20,
        owned: 0,
    },
];

const bpsDisplay = document.getElementById("bps");

function getBlocksPerSecond() {
    let total = 0;
    for (const miner of autoMiners) {
        total = total + miner.production * miner.owned;
    }
    return total;
}

function updateBps(){
    bpsDisplay.innerText = `Blocks per second: ${getBlocksPerSecond()}`;
}

btnVillager.addEventListener("click", function () {
    if(count >= autoMiners[0].cost){
        count = count - autoMiners[0].cost;
        autoMiners[0].owned = autoMiners[0].owned + 1;
        updateDisplay();
        updateBps();
        showMessage(successMsgShop, "Successfully bought the Villager!");
    }else{
        showMessage(errorMsgShop, "You don't have enough blocks mined!");
    }
})

btnIronGolem.addEventListener("click", function () {
    if(count >= autoMiners[1].cost){
        count = count - autoMiners[1].cost;
        autoMiners[1].owned = autoMiners[1].owned + 1;
        updateDisplay();
        updateBps();
        showMessage(successMsgShop, "Successfully bought the Iron Golem!");
    }else{
        showMessage(errorMsgShop, "You don't have enough blocks mined!");
    }
})

btnEnderDragon.addEventListener("click", function () {
    if(count >= autoMiners[2].cost){
        count = count - autoMiners[2].cost;
        autoMiners[2].owned = autoMiners[2].owned + 1;
        updateDisplay();
        updateBps();
        showMessage(successMsgShop, "Successfully bought the Ender Dragon!");
    }else{
        showMessage(errorMsgShop, "You don't have enough blocks mined!");
    }
})

setInterval(() => {
    count = count + getBlocksPerSecond();
    updateDisplay();
}, 1000);
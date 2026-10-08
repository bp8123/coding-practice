// 07/10/2026

const player1 = {
    name: "Steve",
    level: 5,
    health: 20,
    isOnline: true,
    gameMode: "survival",
    position: {
        x: 100,
        y: 64,
        z: -250,
    },
    inventory: [{ item: "diamond_sword", amount: 1,}, { item: "cooked_beef", amount: 32}, { item: "torch", amount: 64}],
    stats: {
        blocksMined: 1520,
        mobsKilled: 87,
        deaths: 3,
    },
    takeDamage: function (amount) {
        const result = this.health - amount;
        if(result <= 0){
            this.health = 0;
        }else{
            this.health = result;
        }
    },
    heal: function(amount){
        const result = this.health + amount;
        if(result >= 20){
            this.health = 20;
        }else{
            this.health = result;
        }
    },
    getTotalItems: function(){
        const bowAmount = player2.inventory[0].amount;
        const arrowAmount = player2.inventory[1].amount;
        const totalItems = bowAmount + arrowAmount;
        return totalItems;
    },
    guild: "Builders United",

}
const player2 = {
    name: "Alex",
    level: 12,
    health: 14,
    isOnline: false,
    gameMode: "creative",
    position: {
        x: -40,
        y: 70,
        z: 310,
    },
    inventory: [{ item: "bow", amount: 1}, { item: "arrow", amount: 128}],
    stats: {
        blocksMined: 4300,
        mobsKilled: 20,
        deaths: 0,
    },
    takeDamage: function (amount) {
        const result = this.health - amount;
        if(result <= 0){
            this.health = 0;
        }else{
            this.health = result;
        }
    },
    heal: function(amount){
        const result = this.health + amount;
        if(result >= 20){
            this.health = 20;
        }else{
            this.health = result;
        }
    },
    getTotalItems: function(){
        const bowAmount = player2.inventory[0].amount;
        const arrowAmount = player2.inventory[1].amount;
        const totalItems = bowAmount + arrowAmount;
        return totalItems;
    },
    tempEffect: "speed",
};
console.log(player1.name);
console.log(player2["level"]);
console.log(player1.position.y);
console.log(player2.inventory[1].item);
player1.takeDamage(8);
console.log(player1.health);
player1.heal(100);
console.log(player1.health);

function hasProperty(player, propertyName){
    if(player.hasOwnProperty(propertyName)){
        return true;
    }else{
        return false;
    }
};
console.log(hasProperty(player1, "inventory"));
console.log(hasProperty(player1, "guild"));

const test1 = player2.hasOwnProperty("tempEffect");
console.log(test1);
delete player2.tempEffect;
const test2 = player2.hasOwnProperty("tempEffect");
console.log(test2);

const server = Object({
    serverName: "CraftWorld",
    maxPlayers: 20,
    players: [player1, player2],
    settings: {
        difficulty: "hard",
        pvp: true,
        weather: "clear",
    },
});
console.log(server.players[1].name);

function getGuildName(player){
    if(player?.guild === undefined){
        return "No guild";
    }else if(player?.guild !== undefined){
        return player.guild;
    }
}
console.log(getGuildName(player1));
console.log(getGuildName(player2));

function printPlayerCard(player){
    const {name, level, health, gameMode, position: {x, y, z}} = player;
    console.log(name, level, health, gameMode, x, y, z);
    const {serverName, maxPlayers} = server;
    console.log(serverName, maxPlayers);
}
console.log(printPlayerCard(player1));

let hp = player1.health
hp = 5;
console.log(player1.health);//20

const sameAsPlayer1 = player1;
sameAsPlayer1.level = 99;
console.log(player1.level);//99

const player2Copy = {...player2};
player2Copy.name = "Alex2";
console.log(player2Copy.name);//alex2
console.log(player2.name);//alex

player2Copy.position.x = 20;
console.log(player2Copy.position.x);//20
console.log(player2.position.x);//20 copy's nested propertys are still shared with the original


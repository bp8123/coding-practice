// 16/10/2026

const playerName = "Steve";
let health = 20;
const day = 1;
const inventory = [
    {name: "Coal", count: 12},
    {name: "Iron", count: 6},
    {name: "Gold", count: 3 },
    {name: "Diamond", count: 1 },
    {name: "Dirt", count: 64 }
];
const stats = {
    blocksMined: 0,
    deaths: 0,
    trips: 0,
};

for(let i = 1; i <= 10; i++){
    stats.blocksMined++;
    console.log("Mined block " + i);
}
console.log(stats.blocksMined);

let totalItems = 0;

for(const item of inventory){
    console.log(`${item.name} x${item.count}`);
    totalItems += item.count;
}
console.log("Total Items: " + totalItems);


for(const object in stats){
    console.log(`${object}: ${stats[object]}`);
}


while(health > 0){
    const damage = Math.floor(Math.random()*5) + 1;
    health -= damage;
    console.log(`Steve took ${damage} damage, health: ${health}`);
    if(health <= 0){
        break;
    }
}
console.log("Steve died!");
stats.deaths += 1;

health = 0;
do{
    health = health + 5;
    console.log(health);
}
while(health < 20);

for(const item of inventory){
    if(item.name === "Dirt"){
        continue;
    }
    if(item.name === "Diamond"){
        console.log("Found a Diamond, stop searching!");
        break;
    }
    console.log(`${item.name}: ${item.count}`);
}

stats.trips = 1;
console.log(`Player: ${playerName}
Day: ${day}
Trips: ${stats.trips}
total items: ${totalItems}`);

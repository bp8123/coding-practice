// 15/10/2026

const player = {
    name: 'bp8123',
    health: 20,
    hunger: 5,
    inventory: [],
};

function addItem(name, amount, maxStack){
    player.inventory.push({name: name, amount: amount, maxStack: maxStack,});
    return player;
}

function removeItem(name, amount) {
    const index = player.inventory.findIndex(item => item.name === name);

    if (index === -1) {
        console.log(`You don't have any ${name}.`);
        return;
    }

    const stack = player.inventory[index];

    if (amount > stack.quantity) {
        console.log(`You only have ${stack.quantity} ${name}, can't remove ${amount}.`);
        return;
    }

    stack.quantity = stack.quantity - amount;

    if (stack.quantity === 0) {
        player.inventory.splice(index, 1);
    }

    console.log(`Removed ${amount} ${name}.`);
}

console.log(player);
addItem("dirt", 44, 64);
console.log(addItem("dirt", 44, 64));

console.log(removeItem("dirt", 2));
console.log(player.inventory[0]);

function hasItem(name){
    for(let i = 0; i < player.inventory.length; i++){
        if(player.inventory[i].name === name){
            return true;
        }
    }
    return false;
}
console.log(hasItem("dirt"));

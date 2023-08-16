const readline = require('readline');
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const emitter = new CustomEmitter();

emitter.on("OrderFood", (item, size, variety) => {
    if (size === 'large') {
        console.log(`50% discount on Large ${item}`);
    }

    console.log(`Order received: ${item} with size ${size} and variety ${variety}`);
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What would you like to order? (Pizza, Biryani, Spaghetti, Pilav, Korma, Nihari): ", (answer) => {
    const item = answer.toLowerCase();

    switch (item) {
        case 'pizza':
            emitter.emit("OrderFood", "Pizza", "large", "baked");
            break;
        case 'biryani':
            emitter.emit("OrderFood", "Biryani", "double plate", "beef");
            break;
        case 'spaghetti':
            emitter.emit("OrderFood", "Spaghetti", "double plate", "chicken");
            break;
        case 'pilav':
            emitter.emit("OrderFood", "Pilav", "double plate", "beef");
            break;
        case 'korma':
            emitter.emit("OrderFood", "Korma", "double plate", "chicken");
            break;
        case 'nihari':
            emitter.emit("OrderFood", "Nihari", "double plate", "chicken");
            break;
        default:
            console.log("Invalid choice.");
    }

    rl.close();
});
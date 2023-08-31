const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mining = true;
let balance = 0;
const walletAddress = crypto.randomBytes(20).toString('hex');

function mineCoins() {
    console.log('Mining AltaCoins...');
    setTimeout(() => {
        if (mining) {
            const minedCoins = Math.floor(Math.random() * 10) + 1;
            balance += minedCoins;
            mineCoins();
        }
    }, 1000);
}

mineCoins();

function stopMiningPrompt() {
    rl.question('Do you want to stop mining? (yes/no): ', (answer) => {
        if (answer.trim().toLowerCase() === 'yes') {
            mining = false;
            storeCoinsPrompt();
        } else {
            stopMiningPrompt();
        }
    });
}

function storeCoinsPrompt() {
    rl.question(`Mining stopped. Wallet address: ${walletAddress}\nDo you want to store the mined coins in the wallet? (yes/no): `, (answer) => {
        if (answer.trim().toLowerCase() === 'yes') {
            console.log(`Coins stored in wallet. Balance: ${balance} AltaCoins`);

        } else {
            console.log(`Coins not stored. Balance: ${balance} AltaCoins`);
        }
        rl.close();
    });
}

stopMiningPrompt();
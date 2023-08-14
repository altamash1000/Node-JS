const readline = require('readline');
const net = require('net');

// Function to get the list of ports in use from 100 to 9000
async function getPortsInUse() {
    const portsInUse = [];

    for (let port = 100; port <= 9000; port++) {
        const portStatus = await checkPortStatus(port);
        if (portStatus === 'open') {
            portsInUse.push(port);
        }
    }

    return portsInUse;
}

// Function to check the status of a specific port
function checkPortStatus(port) {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.listen(port, '127.0.0.1', () => {
            server.close(() => {
                resolve('open');
            });
        });

        server.on('error', () => {
            resolve('closed');
        });
    });
}

// Function to close a specific port
function closePort(port) {
    const server = net.createServer();

    return new Promise((resolve) => {
        server.listen(port, '127.0.0.1', () => {
            server.close(() => {
                resolve();
            });
        });
    });
}

// Main function to handle user input and close ports
async function main() {
    console.log("Fetching list of ports in use...");
    const portsInUse = await getPortsInUse();
    console.log(`Ports in use: ${portsInUse.join(', ')}`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the port you want to close: ', async(portToClose) => {
        try {
            portToClose = parseInt(portToClose, 10);

            if (isNaN(portToClose)) {
                console.log("Invalid port number. Please enter a valid number.");
                rl.close();
                return;
            }

            if (!portsInUse.includes(portToClose)) {
                console.log("Port is not in use or cannot be closed.");
                rl.close();
                return;
            }

            await closePort(portToClose);
            console.log(`Port ${portToClose} has been closed.`);
        } catch (err) {
            console.error("An error occurred:", err.message);
        } finally {
            rl.close();
        }
    });
}

main();
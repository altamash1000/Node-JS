const net = require('net');

function checkPort(port) {
    return new Promise((resolve) => {
        const client = new net.Socket();

        client.connect(port, 'localhost', () => {
            client.destroy();
            resolve(port);
        });

        client.on('error', () => {
            client.destroy();
            resolve(null);
        });
    });
}

async function scanPorts() {
    const openPorts = [];

    console.log('Scanning for open ports...');

    const portPromises = [];
    const startPort = 1;
    const endPort = 9535;

    for (let port = startPort; port <= endPort; port++) {
        portPromises.push(checkPort(port));
    }

    const results = await Promise.all(portPromises);

    for (const port of results) {
        if (port) {
            openPorts.push(port);
        }
    }

    console.log('Open ports:', openPorts);
}

scanPorts();
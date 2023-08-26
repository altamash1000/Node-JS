const net = require('net');

const socket = net.connect({ host: 'example.com', port: 80 }, () => {
    // Socket connection established
    socket.emit('agentRemove'); // This is not a standard function, you need to define 'emit' logic
});

socket.on('agentRemove', () => {
    // Handle the 'agentRemove' event
});
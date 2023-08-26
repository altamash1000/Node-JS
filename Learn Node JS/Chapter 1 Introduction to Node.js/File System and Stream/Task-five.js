// Object: Implement a File Watcher

const fs = require('fs');

const filePath = 'pip.txt';

fs.watch(filePath, (eventType, filename) => {
    console.log(`Event type: ${eventType}`);
    if (filename) {
        console.log(`File affected: ${filename}`);
    }
});
// Object: Use Streams to Read and Write Large Files Efficiently

const fs = require('fs');

const readStream = fs.createReadStream('file-large.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('Reading finished.');
});
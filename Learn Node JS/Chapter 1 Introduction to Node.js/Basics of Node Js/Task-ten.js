// Object:  Create a program that reads and writes data to a text file.

const fs = require('fs');

const inputFilePath = '1008.txt';
const outputFilePath = '1009.txt';

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the input file:', err);
        return;
    }

    fs.writeFile(outputFilePath, data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the output file:', err);
            return;
        }
        console.log('Data has been written to the output file.');
    });
});
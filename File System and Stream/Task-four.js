// Object: Create a Program That Copies a File

const fs = require('fs');

const sourceFilePath = 'source-file.txt';
const destinationFilePath = 'copied-file.txt';

fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File copied successfully.');
});
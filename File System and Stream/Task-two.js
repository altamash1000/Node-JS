// Object: Write Data to a New Text File

const fs = require('fs');

const content = 'Hello, this is the content to be written to the file.';

fs.writeFile('file.txt', content, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully.');
});
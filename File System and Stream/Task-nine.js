// Object: Read and Parse JSON Data from a File

const fs = require('fs');

const filePath = 'sample1.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const jsonData = JSON.parse(data);
    console.log(jsonData);
});
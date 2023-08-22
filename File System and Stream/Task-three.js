// Object: Append Data to an Existing Text File

const fs = require('fs');

const additionalContent = '\nThis content will be appended.';

fs.appendFile('file.txt', additionalContent, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Content appended successfully.');
});
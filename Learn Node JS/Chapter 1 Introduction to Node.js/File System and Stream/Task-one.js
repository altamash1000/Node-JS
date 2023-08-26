// Object: Read a Text File and Display Its Content

const fs = require('fs');

fs.readFile('pip.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
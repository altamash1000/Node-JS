const fs = require('fs');

const writeStream = fs.createWriteStream('file-six.txt', 'utf8');

writeStream.write('Data to be written.\n');

writeStream.end(() => {
    console.log('Writing finished.');
});
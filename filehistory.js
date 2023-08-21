const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the file name: ', (fileName) => {
    fs.stat(fileName, (err, stats) => {
        if (err) {
            console.error('Error:', err.message);
            rl.close();
            return;
        }

        const fileAge = new Date().getTime() - stats.mtime.getTime();
        const fileSize = stats.size;

        console.log(`File age: ${fileAge} milliseconds`);
        console.log(`File size: ${fileSize} bytes`);

        fs.readFile(fileName, 'utf8', (err, content) => {
            if (err) {
                console.error('Error:', err.message);
                rl.close();
                return;
            }

            const charCount = content.length;

            console.log(`Number of characters inside: ${charCount}`);
            console.log('Content:\n', content);

            rl.close();
        });
    });
});
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the file name: ', (fileName) => {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {

            rl.question(`File "${fileName}" does not exist. Do you want to create it? (yes/no): `, (answer) => {
                if (answer.toLowerCase() === 'yes') {
                    rl.question('Enter the content for the file: ', (content) => {
                        fs.writeFile(fileName, content, (err) => {
                            if (err) {
                                console.error('Error creating the file:', err);
                            } else {
                                console.log(`File "${fileName}" has been created with the content: \n${content}`);
                            }
                            rl.close();
                        });
                    });
                } else {
                    console.log('File creation cancelled.');
                    rl.close();
                }
            });
        } else {

            console.log(`File "${fileName}" already exists.`);
            rl.close();
        }
    });
});
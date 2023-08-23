const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getPassword() {
    rl.question('Enter password: ', (password) => {
        if (password === '001') {
            console.log('Password correct. You can now execute code.');
            rl.close();
            runUserCode();
        } else {
            console.log('Incorrect password. Exiting.');
            rl.close();
        }
    });
}

function runUserCode() {
    console.log('You can now start typing and executing code.');

    // code starts

    const readline = require('readline');
    const fs = require('fs/promises');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function ask(question) {
        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    async function createFile() {
        const fileName = await ask('Enter the name of the file to create: ');
        const content = await ask('Enter the content for the file: ');

        try {
            await fs.writeFile(fileName, content);
            console.log(`File "${fileName}" created successfully.`);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function readFile() {
        const fileName = await ask('Enter the name of the file to read: ');

        try {
            const content = await fs.readFile(fileName, 'utf-8');
            console.log(`Content of "${fileName}":\n${content}`);
        } catch (error) {
            console.error('File not found. Creating a new file...');
            await createFile();
        }
    }

    async function editFile() {
        const fileName = await ask('Enter the name of the file to edit: ');

        try {
            let content = await fs.readFile(fileName, 'utf-8');
            console.log(`Current content of "${fileName}":\n${content}`);

            const newContent = await ask('Enter the new content: ');
            content = newContent;

            await fs.writeFile(fileName, content);
            console.log(`File "${fileName}" updated successfully.`);
        } catch (error) {
            console.error('File not found. Creating a new file...');
            await createFile();
        }
    }

    async function deleteFile() {
        const fileName = await ask('Enter the name of the file to delete: ');

        try {
            await fs.unlink(fileName);
            console.log(`File "${fileName}" deleted successfully.`);
        } catch (error) {
            console.error('File not found.');
        }
    }

    async function renameFile() {
        const oldFileName = await ask('Enter the current name of the file: ');
        const newFileName = await ask('Enter the new name for the file: ');

        try {
            await fs.rename(oldFileName, newFileName);
            console.log(`File "${oldFileName}" renamed to "${newFileName}" successfully.`);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function main() {
        while (true) {
            console.log('Suggestions:');
            console.log('1. Create File');
            console.log('2. Read File');
            console.log('3. Edit File');
            console.log('4. Delete File');
            console.log('5. Rename File');

            const choice = await ask('\nEnter your choice (1-5), or type "exit" to quit: ');

            if (choice === 'exit') {
                break;
            }

            switch (choice) {
                case '1':
                    await createFile();
                    break;
                case '2':
                    await readFile();
                    break;
                case '3':
                    await editFile();
                    break;
                case '4':
                    await deleteFile();
                    break;
                case '5':
                    await renameFile();
                    break;
                default:
                    console.log('Invalid choice.');
            }
        }

        rl.close();
    }

    main();
    // code ends here
}

getPassword();
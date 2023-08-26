// Object: Create a Program That Recursively Lists Files and Folders

const fs = require('fs');
const path = require('path');

function listFilesRecursively(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (statErr, stats) => {
                if (statErr) {
                    console.error(statErr);
                    return;
                }
                if (stats.isDirectory()) {
                    console.log(`Directory: ${filePath}`);
                    listFilesRecursively(filePath);
                } else {
                    console.log(`File: ${filePath}`);
                }
            });
        });
    });
}

const directoryPath = 'E:\\Node JS\\File System and Stream\\File System and Stream';
listFilesRecursively(directoryPath);
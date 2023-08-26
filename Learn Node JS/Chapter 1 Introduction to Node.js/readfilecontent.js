const fs = require('fs');
const filePath = "installation.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.log("There is an error in the file.");
    } else {
        console.log("File Content:");
        console.log(data);
    }
});
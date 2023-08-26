// Object: 2. Use the `process` object to access command-line arguments

// Access command-line arguments using process.argv
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("No command-line arguments provided.");
} else {
    console.log("Command-line arguments:");
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}

paste in terminal: node.\Task - two.js arg1 arg2 arg3
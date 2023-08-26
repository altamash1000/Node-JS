// Get an array of command-line arguments
const args = process.argv;

// The first two items in the array are the Node.js executable and the script file path,
// so actual command-line arguments start from index 2.
// For example, if you run: node script.js arg1 arg2 arg3
// args[0] will be 'node', args[1] will be 'script.js', and args[2] will be 'arg1', and so on.
const arg1 = args[2];
const arg2 = args[3];
const arg3 = args[4];

console.log('Command-line arguments:');
console.log(`arg1: ${arg1}`);
console.log(`arg2: ${arg2}`);
console.log(`arg3: ${arg3}`);
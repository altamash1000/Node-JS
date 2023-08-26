// Object:  Use the built-in `os` module to get information about the operating system.

const os = require('os');

const platform = os.platform();
const release = os.release();
const architecture = os.arch();
const cpus = os.cpus();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log('Platform:', platform);
console.log('Release:', release);
console.log('Architecture:', architecture);
console.log('CPUs:', cpus.length);
console.log('Total Memory:', totalMemory);
console.log('Free Memory:', freeMemory);
// Using __dirname and __filename
console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);

// Combining __dirname with a relative path
const relativePath = 'subfolder/example.txt';
const fullPath = require('path').join(__dirname, relativePath);
console.log(`Full path: ${fullPath}`);
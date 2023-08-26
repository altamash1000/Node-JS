// Object: Compress a File Using the zlib Module

const fs = require('fs');
const zlib = require('zlib');

const inputFilePath = 'pip.txt';
const outputFilePath = 'file.gz';

const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream(outputFilePath);
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);
// Object: Implement a Basic CSV File Reader and Parser

// Before you use it type "npm install csv-parser" in terminal and enter

const fs = require('fs');
const csvParser = require('csv-parser');

const filePath = 'annual-enterprise-survey-2021-financial-year-provisional-size-bands-csv.csv';

fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV parsing finished.');
    });
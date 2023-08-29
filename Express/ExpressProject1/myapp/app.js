const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3040;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const formData = req.body;
    const timestamp = new Date().toLocaleString();

    const userData = `
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Email: ${formData.email}
    Phone Number: ${formData.phoneNumber}
    Address: ${formData.address}
    Gender: ${formData.gender}
    City: ${formData.city}
    Submitted At: ${timestamp}
  `;

    fs.mkdirSync('user_data', { recursive: true });
    const filePath = path.join(__dirname, 'user_data', `${timestamp.replace(/[/:,\s]/g, '_')}.txt`);

    fs.writeFile(filePath, userData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error while saving data.');
        } else {
            console.log('Data saved successfully.');
            res.send('Submitted');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
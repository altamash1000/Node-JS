const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html><head><title>Simple Form</title></head><body><h1>A Form</h1><form><label for=\"name\">Name:</label><input type=\"text\" id=\"name\" name=\"name\" required><br><br><label for=\"email\">Email:</label><input type=\"email\" id=\"email\" name=\"email\" required><br><br><label for=\"message\">Message:</label><br><textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"50\" required></textarea><br><br><input type=\"submit\" value=\"Submit\"></form></body></html>");
        return res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html><head><title>Simple Form</title></head><body><h1>B Form</h1><form><label for=\"name\">Name:</label><input type=\"text\" id=\"name\" name=\"name\" required><br><br><label for=\"fatherName\">Father's Name:</label><input type=\"text\" id=\"fatherName\" name=\"fatherName\" required><br><br><label for=\"email\">Email:</label><input type=\"email\" id=\"email\" name=\"email\" required><br><br><label for=\"message\">Message:</label><br><textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"50\" required></textarea><br><br><input type=\"submit\" value=\"Submit\"></form></body></html>");
        return res.end();
    }
});

server.listen(3040);
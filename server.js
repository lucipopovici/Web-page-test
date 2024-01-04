const express = require('express');
const bodyParser = require('body-parser'); // You might need to install body-parser

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    console.log(req.body.message); // Log the message from the form
    res.send("Received your message: " + req.body.message); // Send a response
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

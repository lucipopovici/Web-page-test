const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    res.send("Simple test response from /submit");
});

/*app.post('/submit', (req, res) => {
    console.log(req.body.message); // Log the message from the form
    res.send("Received your message: " + req.body.message); // Send a response
});*/

// Listen to the correct port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Catch-all route for testing
app.all('*', (req, res) => {
    res.send("Catch-all response. Path: " + req.path);
});

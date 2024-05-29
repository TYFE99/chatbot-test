const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    // Simple echo bot response
    const botMessage = `You said: ${userMessage}`;
    res.json({ message: botMessage });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

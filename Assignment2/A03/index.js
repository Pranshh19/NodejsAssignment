const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("I'm homepage");
});


app.get('/about', (req, res) => {
    res.send("I m about page");
});



app.get('/contact', (req, res) => {
    res.send({ email: 'support@pwskills.com' });
});



app.listen(4000);
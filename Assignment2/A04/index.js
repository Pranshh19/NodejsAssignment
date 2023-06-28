const express = require('express')
const app = express();


var rand = 0;

app.get('/', (req, res) => {
   
    res.send("This is a random generator program type /random to view")


})

app.get('/random', (req, res) => {
    rand = Math.random()*100;
    res.send(rand.toString());
})


app.listen(3000);

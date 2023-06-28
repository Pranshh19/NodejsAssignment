const express = require("express");
const app = express();

const port = 3000;

const hostname = 'LocalHost'

var count = 0;

app.get('/', (req, res) => {
    res.send(count.toString());
})

app.get('/increment', (req, res) => {
    count++;
    res.send(count.toString());
})


app.get('/decrement', (req, res) => {
    if(count>0)
        count--;
    else {
        count = 0;
    }
    res.send(count.toString());
})


app.listen(port, () => {
  console.log(`Server Running at ${hostname}: ${port}`);  
})




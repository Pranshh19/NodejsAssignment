const http = require('http');

const server = http.createServer((req,res)=> {
    
    if (req.url == '/') {
        res.write('<h1>Hellow NODEjs </h1>')
    }
    res.end();
})


server.listen(5000);

console.log("I'm happy to learn full stack web development from PW Skills");
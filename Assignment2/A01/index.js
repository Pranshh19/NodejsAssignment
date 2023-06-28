const http = require('http');

const server = http.createServer((req,res)=> {
    
    if (req.url == '/') {
        res.write('<h1>Welcome to men and women dummy data </h1>')
    }
    else if (req.url == '/men') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products?limit=10',
            method: 'GET',
        };
        const apireq = http.request(options, (apiRes) => {

            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.end(data.toString());

            })
        });
        apireq.on("error", (e) => {
            console.log(e);
        })

        apireq.end();

    }
    else if (req.url == '/women') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products?limit=10',
            method: 'GET',
        };
        const apireq = http.request(options, (apiRes) => {

            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.end(data.toString()+'\n\n');

            })
        });
        apireq.on("error", (e) => {
            console.log(e);
        })

        apireq.end();
    }
    else {
        res.statusCode = 500;
        res.write('<h1>Page not found</h1>')
        
    }
})


server.listen(5000);
console.log("Server is Listening");
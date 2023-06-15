//A01
const { log } = require('console');
const fs = require('fs');

//A02
// Creating and adding data in Nodejs architecture file
fs.writeFileSync('nodejs_architecture.txt','As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.', function (err) {
    if (err) {
    
        return err;
    }
    console.log("Succesfully Added");
})

//A03
//Readin from the file
fs.readFile('nodejs_architecture.txt', function (err,data) {
    if (err) {
        console.log("Error");
        return err;
    }
    console.log("Data is: ", data.toString());
})
console.log("\n");



//A04
fs.appendFile('nodejs_architecture.txt', '\nAdvantages of Nodejs are: \n 1.Real time applicaton \n 2. Single Thread application \n 3. Non-Blocking Asynchronus ', function (err) {
    if (err) {
        return err;
    }
    console.log("Success");
})


// //A05
fs.readFile('nodejs_architecture.txt', function (err,data) {
    if (err) {
        console.log("Error");
        return err;
    }
    console.log("Data is: ", data.toString());
})


//A05
fs.unlink('nodejs_architecture');


//A06
const os = require('os')

console.log("OS name: "+os.hostname);
console.log("OS release: "+os.release);

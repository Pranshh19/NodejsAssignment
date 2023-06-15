var events = require('events');
var eventEmitter = new events.EventEmitter();

//A08
//Create an event handler:
var subscribe = function () {
  console.log('Thanks for subscribing to college wallah');
}

//Assign the event handler to an event:
eventEmitter.on('subscribe',subscribe);

//Fire the 'scream' event:
eventEmitter.emit('subscribe', "College Wallah");


//A09
/*

While working with event, if the event handler is removed than the terminal shows an error. 

*/



//A10: 
//getting maxListeners
console.log("Default Maximum event Listeners: "+eventEmitter.getMaxListeners());

//Setting maximum = 5
eventEmitter.setMaxListeners(5)

console.log("The updated Maximum number of event Listeners are: "+eventEmitter.getMaxListeners());
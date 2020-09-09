// the readstream object fires events when opening and closing a file
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');

rs.on('open', function () {
  console.log('The file is open');
});

// node has a built in module called 'events' where you can create, 
// fire, and listen for your own events
var events = require('events');
var eventEmitter = new events.EventEmitter(); // all event properties
// and methods are an instance of an EventEmitter class, so to access
// them you have to create an EventEmitter object. This is what lets you
// assign event handlers to your own events

// create event handler
var myEventHandler = function () {
    console.log('I hear a scream!');
}

// assign the event handler to an event
eventEmitter.on('scream', myEventHandler)

// fire the 'scream' event
eventEmitter.emit('scream')


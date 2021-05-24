const Loader = require('./loader');
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Manage the on method of event
emitter.on('date', (speed, nbrLap) => {
    // On method .on, it calls the method setInterval of loader.js
    Loader.testInterval(speed, nbrLap);
})

// It exports the object "emitter"
module.exports = emitter;

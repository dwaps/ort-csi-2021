const EventEmitter = require('./events');


// // EXEMPLE D'INSTRUCTIONS DU DEVELOPPEUR

// The developper calls the const with lap = 4 and time 1000 miliseconds
// EventEmitter.emit('date', 1000, 4);

// The developper calls the const with lap = 6 and time 2000 miliseconds
EventEmitter.emit('date', 2000, 6);

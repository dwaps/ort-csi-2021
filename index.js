const EventEmitter = require('./event');
const emitter = new EventEmitter();

emitter.on('EVENT'); //Barre de chargement
//console.log(emitter.on());
emitter.emit('EVENT'); //fin du chargement





// Fichier index.js
// Importer la classe EventEmitter
const EventEmitter = require('./event-emitter');
const emitter = new EventEmitter();

//console.log(emitter.on());

emitter.on('EVENT', () => console.log("Event"));
// Pas besoin de la méthode : emitter.once()
emitter.emit('SUPER_EVENT');
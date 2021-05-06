// Fichier index.js
// Importer la classe EventEmitter
const EventEmitter = require('./event-emitter');

const emitter = new EventEmitter();
  
//emitter.on('MY_EVENT', (EventEmitter) => console.log('event emitted !'));
// Pas besoin de la méthode : emitter.once()
emitter.emit('MY_EVENT');
const EventEmitter = require('./event-emitter')

const emitter = new EventEmitter();

emitter.on('MY_EVENT', () => console.log('event emitted !'));

emitter.emit('MY_EVENT');
const EventEmitter = require('./event-emitter')

const emitter = new EventEmitter();

emitter.on('MY_EVENT', console.log);
emitter.on('MY_EVENT', console.log);

emitter.emit('MY_EVENT', 'multiple', 'args');
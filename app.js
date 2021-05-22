
const EventEmitter = require('./event-emitter');
const Loader = require('./loader');

const emitter = new EventEmitter();
const loader = new Loader();

// Chargement
emitter.on('START', () => console.log('Le chargement va commencer attention les yeux'));
emitter.emit('START');

loader.main();

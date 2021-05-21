const EventEmitter = require("./event-emitter");
const loader = require("./loader");

const emitter = new EventEmitter();
const ld = new loader();

ld.on(); // Lancement du chargment
emitter.emit(); //fin du chargement

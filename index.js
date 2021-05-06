const EventEmitter = require("./event-emitter");

const emitter = new EventEmitter();

emitter.on("MY_EVENT", () => console.log("event emitted !"));
// // Pas besoin de la méthode : emitter.once()
emitter.emit("MY_EVENT");

const { chargementEvent } = require("./event");
const { loading, chargement } = require("./loader");

chargementEvent.on(loading, console.log);

chargementEvent.emit(loading, chargement("10M/s",1000, 10));
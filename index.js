const { chargementEvent } = require("./event");
const { nomDuChargement, chargement } = require("./loader");

chargementEvent.on(nomDuChargement, console.log);

chargementEvent.emit(nomDuChargement, chargement("$",1000, 5));// Parametre SIGNE VITESSE NOMBRESIGNE
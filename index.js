const { eventLoader } = require("./event");
const {
  loadName,
  loadRender,
} = require("./loader");

eventLoader.on(loadName, console.log);

// Speed est en seconde 
// si la longueur du signe est supérier a 1 seul le premier caractères sera pris en compte
//

eventLoader.emit(loadName, loadRender(1,"_o",3));
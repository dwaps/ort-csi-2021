"use strict";

let counter = 0;
var chiffre;
var speed;

class EventEmitter {
  on() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Nombre de point : ", (chiffre) => {
      rl.question("À quelle vitesse (1000 = vitesse normal) : ", (speed) => {
        this.chiffre = chiffre;
        this.speed = speed;

        /*Enlevez le commentaire pour l'animation

        const cowsay = require("cowsay");
        const str = cowsay.say({
          text: "Zeeeeee Partie",
          e: "oo",
          T: "UU",
        });
        console.log(str);

        */

        console.log("C'est partie !");

        const display = (count) => {
          const progress = "•".repeat(count).padEnd(chiffre, "·");

          console.log(`(${progress}) Chargement en cours`);
        };

        setInterval(() => {
          counter++;
          display(counter);

          if (counter == chiffre) {
            console.log("Chargement terminé !");
            process.exit(0);
          }
        }, speed);

        rl.close();
      });
    });
  }
  emit() {
    return "Chargement terminé";
  }
}

module.exports = EventEmitter;

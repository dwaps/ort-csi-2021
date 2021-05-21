"use strict";

let counter = 0;
var chiffre;
var vitesse;

class loader {
  on() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Nombre de point : ", (chiffre) => {
      rl.question("Vitesse ? : ", (vitesse) => {
        this.chiffre = chiffre;
        this.vitesse = vitesse;



        console.log("lets go!");

        const display = (count) => {
          const progress = "•".repeat(count).padEnd(chiffre, "·");

          console.log(`(${progress}) Chargement`);
        };

        setInterval(() => {
          counter++;
          display(counter);

          if (counter == chiffre) {
            console.log("Fini !");
            process.exit(0);
          }
        }, vitesse);

        rl.close();
      });
    });
  }
}

module.exports = loader;

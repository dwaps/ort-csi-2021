'use strict';

let counter = 0;
var cpt;

class EventEmitter {
	on() { 
		const readline = require('readline');
		const rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

		rl.question('Tapez un chiffre ici ', (cpt) => {
			this.cpt = cpt;

			const display = (count) => {
			  const progress = '•'.repeat(count).padEnd(cpt, '·');

			  console.log(`(${progress}) Chargement en cours`);
			}

			setInterval(() => {
			  counter++;
			  display(counter);

			  if (counter == cpt){
			  	console.log("Chargement terminé !");
			  	process.exit(0);
			  } 
			}, 1000);

		  rl.close();
		});
	}
    
	emit() { 
		return "Chargement terminé";
    }
}

module.exports = EventEmitter;

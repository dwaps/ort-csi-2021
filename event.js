const Loader = require('./loader');
const loader = new Loader();

class EventEmitter {
	on() { 	
		const readline = require('readline');
		const rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

		rl.question('Entrez un chiffre : ', (cpt) => {
			this.cpt = cpt;
			loader.loading(cpt);
			rl.close();
		});
	}
    
	emit() { 
		return "Chargement terminé";
    }
}

module.exports = EventEmitter;

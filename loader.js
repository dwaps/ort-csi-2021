'use strict';
let counter = 0;
class Loader{
	loading(point){
		this.point = point;
		const display = (count) => {
		  const progress = '•'.repeat(count).padEnd(point, '·');

		  console.log(`(${progress}) Chargement en cours`);
		}

		setInterval(() => {
		  counter++;
		  display(counter);

		  if (counter == point){
		  	console.log("Chargement terminé !");
		  	process.exit(0);
		  } 
		}, 1000);
	}
}

module.exports = Loader;
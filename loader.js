
const EventEmitter = require('./event-emitter');

const emitter = new EventEmitter();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Loader {
    async main() {
        rl.question('Choisir la vitesse de chargement : (Saisir un nombre entre 10 et 1000 de préférence):', (answer) => {
            for (let i = 0; i <= answer; i++) {
                const dots = ".".repeat(i)
                const left = answer - i
                const empty = " ".repeat(left)
                process.stdout.write(`\r[${dots}${empty}]`)
                this.await()
                rl.close()};
            // Fin du chargement
            emitter.on('END', () => console.log(' Bravo !!!! Le chargement est terminé !'));
            emitter.emit('END');
        });
    };

    async await() {
        await new Promise(res => setTimeout(res, 80))   
    }
    
}

loader = new Loader;

module.exports = Loader;
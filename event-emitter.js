
class EventEmitter {
    on() {
        const emitter = new EventEmitter();
        const sport = ["Football","Tennis","Basket","Handball","Rugby"];
        const annee = ["1","2","3","4","5","6"];
        console.log(console.log(`Je fais du ${sport[4]} depuis ${annee[5]} ans `));
    }

    emit() {
        this.on();
        
    }

}

module.exports = EventEmitter;
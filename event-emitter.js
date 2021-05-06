/* Implémenter la classe pour qu'elle ait le comportement du module events de Node */
class EventEmitter {

    on() {
        console.log('test event');
    }

    off() {
    }

    emit(title) {
        if (title == "EVENT") {
            this.on();
        } else {
            return title;
        }
    }
    
    constructor(event){
        console.log(event);
     }
}

module.exports = EventEmitter;
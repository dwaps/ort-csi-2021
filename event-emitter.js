class EventEmitter {
    
    on(name, callback) {
        return name + ' ' + callback;
    }

    emit(name) {
        console.log(evenement.on(name));
    }
}
evenement = new EventEmitter;

module.exports = EventEmitter;

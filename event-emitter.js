class EventEmitter {
    
    on(name, callback) {
        evenement = {};
        evenement[name] = callback;
    }

    emit(name) {
        for (var e in evenement) {
            if (e === name){
                evenement[e]();
            }
        }
    }
}
evenement = new EventEmitter;

module.exports = EventEmitter;  

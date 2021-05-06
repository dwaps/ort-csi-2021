class EventEmitter{

    constructor() {
        this.events = {};
    }

    on(eventName, element){
        this.events[eventName] = element;
    }

    emit(eventName){
        for (var event in this.events) {
            if (event === eventName){
                this.events[event]();
            }
        }
    }
}

module.exports = EventEmitter



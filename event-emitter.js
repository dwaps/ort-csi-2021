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

const emitter = new EventEmitter();

emitter.on('MY_EVENT', () => console.log('event emitted !'));

emitter.emit('MY_EVENT');



class EventEmitter {
    constructor() {
        this.myevents = {};
    }

    on(eventName, func) {
        if (eventName)
            this.myevents[eventName] = (func);

        else
            this.myevents[eventName] = [func];
    }
    emit(eventName, ...res) {
        if (eventName) {
            if (this.myevents[eventName]) {
                this.myevents[eventName].forEach(cb => {
                    return cb.apply(res)
                })
            } else
                return this.myevents[eventName]
        }
    };
}

const emitter = new EventEmitter();

emitter.on("salut")
console.log(emitter.emit("salut", function(1, 2) {
   
}));
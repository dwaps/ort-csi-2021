class EventEmitter {
    on(){
       console.log('event emitted !');
    }

    emit(){
        this.on();
    }
}

module.exports = EventEmitter;
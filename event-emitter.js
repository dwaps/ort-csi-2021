class EventEmitter {
    constructor() {
      this.listen = {};
    }
  
    addListen(eventNom, a) {
      this.listen[eventNom] = this.listen[eventNom] || [];
      this.listen[eventNom].push(a);
      return this;
    }
  
    on(eventNom, a) {
      return this.addListen(eventNom, a);
    }
  
    emit(eventNom, ...args) {
      let fns = this.listen[eventNom];
      if (!fns) return false;
      fns.forEach((f) => {
        f(...args);
      });
      return true;
    }
  }
  
  module.exports = EventEmitter;
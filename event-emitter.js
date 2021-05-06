class EventEmitter {
  constructor() {
    this.listen = {};
  }

  addListen(eventName, fn) {
    this.listen[eventName] = this.listen[eventName] || [];
    this.listen[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {
    return this.addListen(eventName, fn);
  }

  emit(eventName, ...args) {
    let fns = this.listen[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }
}

module.exports = EventEmitter;

// Nouveau fichier: event-emitter.js
class EventEmitter {
  /* Implémenter la classe pour qu'elle ait le comportement du module events de Node */
  on() {
         return 'Je suis un evenement';
    }

    emit() {
         return 'Je suis un super evenement';
    }
}
module.exports = EventEmitter;

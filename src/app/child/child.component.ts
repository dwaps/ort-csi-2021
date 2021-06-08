import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Child component</h3>
    <button (click)="test()">TEST</button>
    {{ parReceived }}
  `,
  styles: [
  ]
})
export class ChildComponent {
  @Input()
  parReceived = "";

  @Output()
  emitter = new EventEmitter();

  test() {
    this.emitter.emit({
      name: 'TestEmitter',
      value: 'Valeur envoyée par l\'enfant',
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent component</h1>
    <app-child
      (emitter)="onValReceived($event)"
      [parReceived]="paragraph">
    </app-child>
    {{ val }}
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  val = '';

  onValReceived(e: any) {
    this.val = e.value;
  }

  paragraph = 'Explicabo ut aspernatur aliquam. Aut atque harum repellat quisquam eum sint distinctio et sed. Aliquid atque molestias quia. Voluptatibus voluptatibus in et cumque in.';

  constructor() { }

  ngOnInit(): void {
  }

}

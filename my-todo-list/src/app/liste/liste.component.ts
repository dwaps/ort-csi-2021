import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent {
  title = 'todo';

  allItems = [
    { description: 'first' },
  ];

  get items() {
    return this.allItems;
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
    });
  }

  delete(index: number) {
    this.allItems.splice(index, 1)
  }

}
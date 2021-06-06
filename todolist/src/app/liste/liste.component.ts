import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'buy some milk', done: true },
    { description: 'wash the car', done: false },
    { description: 'sell the table', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  delete(index: number) {
    this.allItems.splice(index, 1)
  }

}
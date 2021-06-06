import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent {

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
    // localStorage.setItem('tasks', description);
  }

  delete(index: number) {
    this.allItems.splice(index, 1);
  }

  update(description: string, index: number) {
    this.allItems[index].description = description
  }

}
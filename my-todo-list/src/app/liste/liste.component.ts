import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

class Item {
  description: string;

  constructor() {
    this.description = '';
  }
}


@Component({
  selector: 'app-list',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  items: Item[] = [];
  newItem: Item = new Item();

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('tasks') || '{}');
  }

  addItem() {
    this.items.push(this.newItem);
    this.newItem = new Item();
    localStorage.setItem('tasks', JSON.stringify(this.items));
  }

  delete(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.items));
  }

  update(description: string, index: number) {
    this.items[index].description = description;
    localStorage.setItem('tasks', JSON.stringify(this.items));
  }

}
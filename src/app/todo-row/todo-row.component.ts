import { Component, Input, OnInit } from '@angular/core';
const { log } = console;
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.scss']
})
export class TodoRowComponent implements OnInit {
  @Input() tache: string = "";
  @Input() index: number = 0;
  constructor(private todoservices: TodoService) {
  }

  ngOnInit(): void {
  }
  onRemoveTodo() {
    return this.todoservices.removeTodo(this.index)
  }
  onChangeTodo() {
    this.todoservices.changeTodo(this.index, this.tache)
  }
}
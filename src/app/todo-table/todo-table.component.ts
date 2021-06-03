import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  todos = <any>[]
  inputTodo: string = "";
  ngOnInit(): void {
    this.todos = this.todoService.todos;
  }

  onAddTodo() {
    this.todoService.addTodo(this.inputTodo)
    this.inputTodo = "";
  }
  onDeleteAll() {
    this.todoService.deleteAllTodo()
    location.reload()
  }
}

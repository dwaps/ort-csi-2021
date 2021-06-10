import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo = new Todo();
  constructor(private todoService: TodoService) {}
  public deleteTodo() {
    this.todoService.deleteTodo(<string>this.todo.id);
  }
}

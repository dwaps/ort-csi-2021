import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];
  public todo: Todo = new Todo();

  private subscription: Subscription|null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.subscription = this.todoService.todos$.subscribe(data => {
      this.todos = data;
    });
  }

  submitForm() {
    this.todoService.createTodo(this.todo);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}

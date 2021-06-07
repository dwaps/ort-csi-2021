import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];

  private subscription: Subscription|null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.subscription = this.todoService.todos$.subscribe(data => {
      this.todos = data;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}

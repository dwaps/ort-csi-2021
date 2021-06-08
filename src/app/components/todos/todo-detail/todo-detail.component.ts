import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements DoCheck {
  public todo?: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
  ) {}

  ngDoCheck() {
    const id = <string>this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodo(id);
  }
}

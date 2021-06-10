import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  public todo = new Todo();

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = <string>this.route.snapshot.paramMap.get('id');
    this.todoService.todos$.subscribe(data => {
      this.todo = this.todoService.getTodo(id) || new Todo();
    });
  }

  updateTodo() {
    this.todoService.updateTodo(this.todo);
    this.router.navigateByUrl('/todolist');
  }

}

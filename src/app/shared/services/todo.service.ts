import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../models/todo";
import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlApiTodos = environment.urlApi + "/todos";
  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private http: HttpClient) {
    this.getTodos();
  }

  public getTodos() {
    this.http
      .get<Todo[]>(this.urlApiTodos)
      .subscribe(data => this.todos$.next(data));
  }

  public getTodo(id: string) {
    return this.todos$.value.find(t => t.id === id);
  }

  public createTodo(todo: Todo) {
    this.http
      .post<Todo>(this.urlApiTodos, todo)
      .subscribe(t => this.todos$.next([...this.todos$.value, t]));
  }

  public updateTodo(todo: Todo) {
    this.http
      .put<Todo>(`${this.urlApiTodos}/${todo.id}`, todo)
      .subscribe(t => {
        const todos = this.todos$.value.filter(el => el.id !== todo.id);
        this.todos$.next([...todos, t]);
      });
  }

  public deleteTodo(id: string) {
    this.http
      .delete(`${this.urlApiTodos}/${id}`)
      .subscribe(() => {
        const todos = this.todos$.value.filter(el => el.id !== id);
        this.todos$.next(todos);
      })
  }
}

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
}

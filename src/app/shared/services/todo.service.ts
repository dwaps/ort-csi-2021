import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor() {
    setTimeout(() => {
      const todosReceivedFromServer = [
        new Todo("Faire la vaisselle"),
        new Todo("Faire le ménage"),
        new Todo("Faire les courses"),
      ];
      this.todos$.next(todosReceivedFromServer);
    }, 3000);
  }
}

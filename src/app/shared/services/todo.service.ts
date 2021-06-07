import { Todo } from "../models/todo";

export class TodoService {
  public todos: Todo[] = [
    new Todo("Faire la vaisselle"),
    new Todo("Faire le ménage"),
    new Todo("Faire les courses"),
  ];

  constructor() {}
}

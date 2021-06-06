import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]=[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Ma premiere tache',
        completed: false
      },
      {
        content: 'Ma deuxieme tache',
        completed: false
      }
    ]
    this.todos = JSON.parse(localStorage.getItem('todos')!);
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.saveToLocalStorage();
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
    this.saveToLocalStorage();
  }
  private saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
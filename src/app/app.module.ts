import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoDetailComponent } from './components/todos/todo-detail/todo-detail.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoEditComponent } from './components/todos/todo-edit/todo-edit.component';


const routes: Route[] = [
  { path: 'todolist', component: TodosComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: 'todo/:id/edit', component: TodoEditComponent },
  { path: '**', redirectTo: 'todolist' },
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

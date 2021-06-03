import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { TodoRowComponent } from './todo-row/todo-row.component';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
const AppRoutes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "accueil", component: AccueilComponent },
  { path: "todolist", component: TodoTableComponent },
  { path: "contact", component: ContactComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: 'not-found' }
]
@NgModule({
  declarations: [
    AppComponent,
    TodoTableComponent,
    TodoRowComponent,
    ContactComponent,
    AccueilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(AppRoutes)
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

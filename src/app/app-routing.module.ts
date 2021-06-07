import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { accueilComponent } from './accueil/accueil.component';
import { TodoComponent } from './todo/todo.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/accueil', pathMatch: 'full'
  },
  {
    path: 'accueil', 
    component: accueilComponent
  },
  {
    path: 'todo', 
    component: TodoComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule { }

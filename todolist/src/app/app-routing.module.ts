import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListeComponent } from './liste/liste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [HomeComponent, ContactComponent, ListeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
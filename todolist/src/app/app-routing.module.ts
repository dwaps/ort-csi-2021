import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfaireComponent } from './components/afaire/afaire.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'afaire', component: AfaireComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
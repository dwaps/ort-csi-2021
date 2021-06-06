import { Component, OnInit } from '@angular/core';
import { afaire } from './../../models/Afaire';

@Component({
  selector: 'app-afaire',
  templateUrl: './afaire.component.html',
  styleUrls: ['./afaire.component.css']
})
export class AfaireComponent implements OnInit {

  afaire:afaire[]=[];

  inputAfaire:string ="";

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('Afaire'))
      this.afaire = JSON.parse(localStorage.getItem('Afaire') || '{}');
    else {
      this.afaire = [];
      localStorage.setItem('Afaire', JSON.stringify(this.afaire));
    }
  }


  toggleDone (id:number) {
    this.afaire.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
  supprimeAfaire (id:number) {
    this.afaire = this.afaire.filter((v, i) => i !== id);
    this.saveToLocalStorage();
  }

  ajoutTache () {
    this.afaire.push({
      content: this.inputAfaire,
      completed: false
    });

    this.inputAfaire = "";
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('Afaire', JSON.stringify(this.afaire));
  }

}

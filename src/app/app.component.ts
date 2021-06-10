import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from './models/address';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public countries = [
    { id: "5492f312-7fc8-44a8-b122-0ce8d773b5af", name: "France" },
    { id: "a15f239b-f3a1-4cdf-84f0-481ff937d228", name: "Espagne" },
    { id: "b36f4856-bb3d-4b12-ba9f-5da731bcde97", name: "Italie" },
  ];

  public contact = new Contact();
  public address = new Address();
  constructor() {
    this.contact.address = this.address;
  }

  submitForm(form: NgForm) {
    console.log(form.value);
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from './models/address';
import { Contact } from './models/contact';
import { Country } from './models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public countries: Country[] = [];
  public contact = new Contact();
  public address = new Address();
  
  constructor() {
    Object.values(Country).forEach(c => this.countries.push(c));
    this.contact.address = this.address;
  }

  submitForm(form: NgForm) {
    console.log(form.value);
  }
}

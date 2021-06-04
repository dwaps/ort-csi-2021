import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
    init("user_JdGhiHzXxXHSAKx9R2NO7");
   }

  ngOnInit(): void {
  }
  reload() {
    location.reload()
  }

}

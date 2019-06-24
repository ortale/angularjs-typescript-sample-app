import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../_components/navbar/navbar.component';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    NavbarComponent.activeAbout = "nav-item active"
    NavbarComponent.activeHome = "nav-item"
    NavbarComponent.activeContact = "nav-item"
  }

}

import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../_components/navbar/navbar.component';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    NavbarComponent.activeContact = "nav-item active"
    NavbarComponent.activeAbout = "nav-item"
    NavbarComponent.activeHome = "nav-item"
  }

}

import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../_components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    NavbarComponent.activeHome = "nav-item active"
    NavbarComponent.activeAbout = "nav-item"
    NavbarComponent.activeContact = "nav-item"
  }

}

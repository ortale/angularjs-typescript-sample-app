import { Component, OnInit, Input } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  active: string
  static activeHome: string = "nav-item"
  static activeAbout: string = "nav-item"
  static activeContact: string = "nav-item"

  constructor() { 
    
  }

  setActive(active: string) {
    this.active = active;
  }

  ngOnInit() {
    
  }

  handleMenu(id: string) {
    $("li").each(function() {
      $(this).attr("class", "nav-item")
    });

    $("#" + id).attr("class", "nav-item active")
  }

}

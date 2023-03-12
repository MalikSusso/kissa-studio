import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kissa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title : String = "The Making of a Manger"
  constructor() { }

  ngOnInit(): void {
  }

}

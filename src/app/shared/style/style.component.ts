import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  constructor(public bsModalRef1: BsModalRef) {}

  ngOnInit(): void {
  }

  hideModalTextEditor () {
    this.bsModalRef1.hide();
  }

}

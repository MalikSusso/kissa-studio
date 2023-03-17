import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}
  ngOnInit(): void {
  }

  hideModalTextEditor () {

    this.bsModalRef.hide();
  }

}

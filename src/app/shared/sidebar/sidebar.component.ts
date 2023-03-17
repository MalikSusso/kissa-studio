import { Component, OnInit , TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StyleComponent } from '../style/style.component';
import { TextEditorComponent } from '../text-editor/text-editor.component';


@Component({
  selector: 'kissa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SidebarComponent implements OnInit {



  constructor(private modalService: BsModalService,public bsModalRef: BsModalRef ){ }

  ngOnInit(): void {

  }


  openTextEditor() {
    this.modalService.show(
      TextEditorComponent);
  }

  openStyle () {
    this.modalService.show(StyleComponent)
  }


}

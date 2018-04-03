import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public modalRef : BsModalRef;
  constructor(private modalService: BsModalService){

  }
  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
}

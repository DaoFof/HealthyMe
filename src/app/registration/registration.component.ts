import { Component, OnInit } from '@angular/core';
import {Registration} from '../registration';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Types = ['Patient','Doctor', 'Hospital Manager'];
  submitted = false;
  model = new Registration('', '', '', '', '');
  constructor(private registrationService: RegistrationService) { }
  postRes;
  headers;
  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    this.registrationService.registrer(this.model)
      .subscribe(resp=>{
        const keys = resp.headers.keys();
        this.headers = keys.map(key=>
        `${key}: ${resp.headers.get(key)}`);
        console.log(this.headers);
        
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../hospitals.service';

@Component({
  selector: 'app-myhospitals',
  templateUrl: './myhospitals.component.html',
  styleUrls: ['./myhospitals.component.css','../mydoctors/mydoctors.component.css']
})
export class MyhospitalsComponent implements OnInit {
  hospitals;
  evenOrOdd = function(number){
    if(number % 2 == 0)return false;
    return true;
  }

  mockPatientId = "5ad5843323ac1f0fe898166e"; //To be set to token of currently connected user
  constructor(private hospitalsService : HospitalsService) { }

  ngOnInit() {
    this.getHospitals();
  }
 async getHospitals(){
    this.hospitals = await this.hospitalsService.getMyHospitals(this.mockPatientId);
    console.log(this.hospitals);
  }
}

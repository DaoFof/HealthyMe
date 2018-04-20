import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-mydoctors',
  templateUrl: './mydoctors.component.html',
  styleUrls: ['./mydoctors.component.css']
})
export class MydoctorsComponent implements OnInit {
  doctors;
  evenOrOdd = function(number){
    if(number % 2 == 0)return false;
    return true;
  }
  mockPatientId = "5ad9b286a5f52e1f88ea556f";
  constructor(private doctorService: DoctorsService) { }

  ngOnInit() {
    this.getMyDoctors();
  }
  async getMyDoctors(){
    this.doctors= await this.doctorService.getMyDoctors(this.mockPatientId);
    console.log(this.doctors);
  }

}

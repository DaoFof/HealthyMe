import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../hospitals.service';


@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css']
})
export class SearchHospitalComponent implements OnInit {
  hospitals;
  constructor(private hospitalsService : HospitalsService) { }

  ngOnInit() {
    this.getHospitals();
  }
  getHospitals(): void{
    this.hospitals = this.hospitalsService.getHospitals();
    /*console.log(this.hospitals);*/
  }
}

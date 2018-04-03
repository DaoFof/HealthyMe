import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../hospitals.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css']
})
export class SearchHospitalComponent implements OnInit {
  hospitals: Observable<any[]>;
  constructor(private hospitalsService : HospitalsService) { }

  ngOnInit() {
    this.getHospitals();
  }
  getHospitals(): void{
    this.hospitalsService.getHospitals()
            .subscribe(res => console.log(res['result']));
    console.log(this.hospitals);
  }
}

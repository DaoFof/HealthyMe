import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HospitalsService } from '../hospitals.service';

@Component({
  selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.css']
})
export class HospitalDetailComponent implements OnInit {
  hospital;
  hospitalLocation: string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(
    private route: ActivatedRoute,
    private hospitalsService: HospitalsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHospital();
  }

  async getHospital(){
    const id = this.route.snapshot.paramMap.get('id');
    this.hospital = await this.hospitalsService.getHospital(id);
    this.hospitalLocation = this.hospital[0].addressline1 + ', ' + this.hospital[0].city + ', ' + this.hospital[0].country;
  }
  
}

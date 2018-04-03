import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HospitalsService {

  constructor(private http: HttpClient) { }
  contineoRoot: string= "https://115.112.92.146:48443/contineonx-web-admin/daouda-healthyme-api";
  getHospitals(){
    console.log("GET");
    let url = `${this.contineoRoot}/hospitals`;
    return this.http.get(url);
  }
}

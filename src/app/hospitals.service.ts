import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HospitalsService {

  constructor(private http: HttpClient) { }
  contineoRoot: string= "https://115.112.92.146:48443/contineonx-web-admin/daouda-healthyme-api";
  herokuApiRoot: string = "https://shrouded-wildwood-20663.herokuapp.com"
  localApi: string = "http://localhost:3000";
  adress = this.localApi;
  hospitalGET(url:string){
    return this.http.get(url).toPromise().then(
      res =>{
        return res['hospitals'] || res['hospital'];
      },
      error =>(console.log(error))//error handle 
    );
  }
  //in case of contineoRoot : hospitals?id=
  getHospitals(){
    let url = `${this.adress}/hospital`;
    return this.hospitalGET(url);
  }
  getHospital(id: string){
    let url = `${this.adress}/hospital/${id}`; 
    return this.hospitalGET(url);
  }
  getMyHospital(patientId: string){
    let url = `${this.adress}/patientHospital/${patientId}`; 
    return this.hospitalGET(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HospitalsService {

  constructor(private http: HttpClient) { }
  contineoRoot: string= "https://115.112.92.146:48443/contineonx-web-admin/daouda-healthyme-api";
  hospitalGET(url:string){
    return this.http.get(url).toPromise().then(
      res =>{
        return res['result'];
        /*console.log(this.hospitals);*/
      },
      error =>(console.log(error))//error handle 
    );
  }
  getHospitals(){
    console.log("GET");
    let url = `${this.contineoRoot}/hospitals?id=`;
    return this.hospitalGET(url);
  }
  getHospital(id: string){
    let url = `${this.contineoRoot}/hospitals?id=${id}`;
    return this.hospitalGET(url);
  }
}

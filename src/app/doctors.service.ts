import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DoctorsService {

  constructor(private http: HttpClient) { }

  contineoRoot: string= "https://115.112.92.146:48443/contineonx-web-admin/daouda-healthyme-api";
  herokuApiRoot: string = "https://shrouded-wildwood-20663.herokuapp.com"
  localApi: string = "http://localhost:3000";
  adress = this.localApi;
  doctorGET(url:string){
    return this.http.get(url).toPromise().then(
      res =>{
        return res['doctor'] || res['doctors'];
      },
      error =>(console.log(error))//error handle 
    );
  }
  getDoctors(){
    let url = `${this.adress}/doctor`;
    return this.doctorGET(url);
  }
  getDoctor(id){
    let url = `${this.adress}/doctor/${id}`;
    return this.doctorGET(url)
  }
  getMyDoctors(patientId: string){
    let url = `${this.adress}/patientDoctor/${patientId}`;
    return this.doctorGET(url)
  }
}

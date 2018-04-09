import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent }      from './about/about.component';
import { LoginComponent }      from './login/login.component';
import { HomeComponent }      from './home/home.component';
import { InformationsComponent }      from './informations/informations.component';
import { RegistrationComponent }      from './registration/registration.component';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { HospitalDetailComponent } from './hospital-detail/hospital-detail.component';
import { HttptestComponent } from './httptest/httptest.component';
import { GridHosptitalComponent } from './grid-hosptital/grid-hosptital.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';

import { ProfilePatientComponent } from './profile-patient/profile-patient.component';
//Profile patients subcomponents
import { MydoctorsComponent } from './mydoctors/mydoctors.component';
import { MyhospitalsComponent } from './myhospitals/myhospitals.component';
import { MyrecordsComponent } from './myrecords/myrecords.component';
import { MyconsultationsComponent } from './myconsultations/myconsultations.component';
import { MyprescriptionsComponent } from './myprescriptions/myprescriptions.component';

import { SiteLayoutComponent }      from './_layout/site-layout/site-layout.component';


const routes: Routes = [

  //Site routes goes here 
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'about', component: AboutComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'informations', component: InformationsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'patientProfile', 
        component: ProfilePatientComponent,
        //sub components
        children:[
          {path: 'mydoctors', component: MydoctorsComponent},
          {path: 'myhospitals', component: MyhospitalsComponent},
          {path: 'myrecords', component: MyrecordsComponent},
          {path: 'myconsultations', component: MyconsultationsComponent},
          {path: 'myprescriptions', component: MyprescriptionsComponent}
        ]},
    ]
},

  { path: 'searchhospital', component: SearchHospitalComponent },
  {path : 'hospital/:id', component: HospitalDetailComponent},
  {path: 'httpTest', component: HttptestComponent},
  {path: 'hospitalGrid', component: GridHosptitalComponent},
  {path: 'searchdoctor',component: SearchDoctorComponent},
  
  /*{ path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'informations', component: InformationsComponent }*/
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {

  
}
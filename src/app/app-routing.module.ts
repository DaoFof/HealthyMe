import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent }      from './about/about.component';
import { LoginComponent }      from './login/login.component';
import { HomeComponent }      from './home/home.component';
import { InformationsComponent }      from './informations/informations.component';
import { RegistrationComponent }      from './registration/registration.component';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { HospitalDetailComponent } from './hospital-detail/hospital-detail.component';

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
      { path: 'login', component: LoginComponent }
    ]
},

  { path: 'searchhostpital', component: SearchHospitalComponent },
  {path : 'hospital/:id', component: HospitalDetailComponent},
  /*{ path: 'registration', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BootstrapModule } from './bootstrap-module/bootstrap-module.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { PresentationComponent } from './_layout/presentation/presentation.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { InformationsComponent } from './informations/informations.component';
import { LoginComponent } from './login/login.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { HospitalDetailComponent } from './hospital-detail/hospital-detail.component';
import { GridHosptitalComponent } from './grid-hosptital/grid-hosptital.component';

import { HttptestComponent } from './httptest/httptest.component';
import { HospitalsService } from './hospitals.service';

import { AgmCoreModule } from '@agm/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { ProfilePatientComponent } from './profile-patient/profile-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    AboutComponent,
    HomeComponent,
    RegistrationComponent,
    InformationsComponent,
    LoginComponent,
    SiteLayoutComponent,
    SearchHospitalComponent,
    HospitalDetailComponent,
    HttptestComponent,
    GridHosptitalComponent,
    SearchDoctorComponent,
    ProfilePatientComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHQyx6ONu1Djj6FXR_G-NPcNbh-eYK9tA'
    }),
    NgxDatatableModule
  ],
  providers: [HospitalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

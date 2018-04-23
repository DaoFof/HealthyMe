import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

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
import { MydoctorsComponent } from './mydoctors/mydoctors.component';
import { MyhospitalsComponent } from './myhospitals/myhospitals.component';
import { MyrecordsComponent } from './myrecords/myrecords.component';
import { MyconsultationsComponent } from './myconsultations/myconsultations.component';
import { MyprescriptionsComponent } from './myprescriptions/myprescriptions.component';

//utils
import { PaginationComponent } from './pagination/pagination.component';
import { DoctorsService } from './doctors.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { RegistrationService } from './registration.service';


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
    ProfilePatientComponent,
    MydoctorsComponent,
    MyhospitalsComponent,
    MyrecordsComponent,
    MyconsultationsComponent,
    MyprescriptionsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHQyx6ONu1Djj6FXR_G-NPcNbh-eYK9tA' //map  key
    }),
    NgxDatatableModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    FormsModule
  ],
  providers: [HospitalsService, DoctorsService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

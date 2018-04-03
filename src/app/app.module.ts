import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
/*import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';*/
import { HttpClientModule } from '@angular/common/http';

import { HttptestComponent } from './httptest/httptest.component';
import { HospitalsService } from './hospitals.service';

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
    HttptestComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HospitalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

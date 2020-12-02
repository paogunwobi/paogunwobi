import { EmailService } from './../../services/email/email.service';
import { ProductsComponent } from './../products/products.component';
import { ServicesComponent } from './../services/services.component';
import { ContactComponent } from './../contact/contact.component';
import { ResumeComponent } from './../resume/resume.component';
import { AboutComponent } from './../about/about.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalRoutingModule } from './global-routing.module';
import { GlobalComponent } from './global.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from '../home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [GlobalComponent, HomeComponent,
    AboutComponent, ResumeComponent, ContactComponent, ServicesComponent, ProductsComponent],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgbCollapse,
    // NgbCollapseConfig
  ],
  exports: [GlobalComponent],
  providers: [ EmailService ],
  // bootstrap: [GlobalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlobalModule { }

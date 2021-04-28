import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { AboutComponent } from './about/about.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllemployeeComponent } from './allemployee/allemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeepageComponent } from './employeepage/employeepage.component';
import {MatCardModule} from '@angular/material/card';
import { ForgotuserComponent } from './forgotuser/forgotuser.component';
import { ForgotemployeeComponent } from './forgotemployee/forgotemployee.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    AboutComponent,
    AdminregisterComponent,
    AllemployeeComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeepageComponent,
    ForgotuserComponent,
    ForgotemployeeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

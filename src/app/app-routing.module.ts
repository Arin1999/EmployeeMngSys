import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { AboutComponent } from './about/about.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AllemployeeComponent } from './allemployee/allemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeepageComponent } from './employeepage/employeepage.component';
import { ForgotuserComponent } from './forgotuser/forgotuser.component';
import { ForgotemployeeComponent } from './forgotemployee/forgotemployee.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {component:AdminloginComponent,path:'adminlogin'},
  {component:EmployeeloginComponent,path:'employeelogin'},
  {component:AboutComponent,path:''},
  {component:AboutComponent,path:'about'},
  {component:AdminregisterComponent,path:'registeradmin'},
  {component:ForgotuserComponent,path:'forgotuser'},
  {component:ForgotemployeeComponent,path:'forgotemployee'},
  {path:'adminlogin',children:[
    {component:AllemployeeComponent,path:'allemployee',canActivate:[AuthGuardService]},
    {component:AddemployeeComponent,path:'addemployee',canActivate:[AuthGuardService]},
    {component:EditemployeeComponent,path:'edit/:id',canActivate:[AuthGuardService]},
  ]},
  {path:'employeelogin',children:[
    {component:EmployeepageComponent,path:'employeepage/:id'},
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

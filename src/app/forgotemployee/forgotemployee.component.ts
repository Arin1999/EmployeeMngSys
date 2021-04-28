import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-forgotemployee',
  templateUrl: './forgotemployee.component.html',
  styleUrls: ['./forgotemployee.component.css']
})
export class ForgotemployeeComponent implements OnInit {

  constructor(private service:EmployeeService,private router: Router) { }
  employee = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),     
  })
  changepassword:boolean=false;
  ngOnInit( ): void {
  }
checkUser(){
  this.service.checkUsername(this.employee.value).subscribe((success)=>{
    console.log("result is  here",success)
    this.employee=new FormGroup({
      id:new FormControl(success[0].id),
      name:new FormControl(success[0].name),
      password:new FormControl(''),
      dob:new FormControl(success[0].dob),
      gender:new FormControl(success[0].gender),
      dept:new FormControl(success[0].dept),
      salary:new FormControl(success[0].salary),
      location:new FormControl(success[0].location),
    })

    if(success.length==1){
      this.changepassword=true;
    }
    else{
      this.changepassword=false;
      alert("username not valid ");
    }
  });
}
changePassword(){
  this.service.updatepassword(this.employee.value).subscribe((success)=>{
    console.log("result is  here",success)
    this.router.navigate(['employeelogin']);
  });
}

}

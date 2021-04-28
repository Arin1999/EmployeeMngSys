import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  employee = new FormGroup({
    name:new FormControl(''),    
    password:new FormControl('')
  })
  constructor(private service: EmployeeService,private router: Router ) { }

  ngOnInit(): void {
  }
  loginEmployee(){
    this.service.checkEmployee(this.employee.value).subscribe((success)=>{
     if(success.length==1){
      // console.log(success[0].id);
      this.router.navigate([`employeelogin/employeepage/${success[0].id}`]);
      }
      else{
        alert("username or password not valid ");
        this.router.navigate(['employeelogin']);
      }
    });
  }
}
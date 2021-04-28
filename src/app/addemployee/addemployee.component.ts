import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  addEmployee= new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
    dob:new FormControl(''), 
    gender:new FormControl(''),   
    dept:new FormControl(''), 
    salary:new FormControl(''), 
    location:new FormControl('')
  })
  constructor(private service :EmployeeService,private router :Router) { }

  ngOnInit(): void {
  }
  adddetails(){
console.log(this.addEmployee.value);
this.service.addEmployee(this.addEmployee.value).subscribe((success)=>{
  console.log("result is  here",success)
    this.router.navigate(['adminlogin/allemployee']);
});
  }
}

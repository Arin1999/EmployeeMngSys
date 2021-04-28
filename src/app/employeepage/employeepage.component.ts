import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeepage',
  templateUrl: './employeepage.component.html',
  styleUrls: ['./employeepage.component.css']
})
export class EmployeepageComponent implements OnInit {
  currentDate=new Date().getFullYear();
  employee= new FormGroup({
    name:new FormControl(''),
    dob:new FormControl(''), 
    gender:new FormControl(''),   
    dept:new FormControl(''), 
    salary:new FormControl(''), 
    location:new FormControl('')
  })
  constructor(private service : EmployeeService,private router :ActivatedRoute ,private router1 : Router) { }

  ngOnInit(): void {
    this.service.getEmployeeById(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.employee=new FormGroup({
        id:new FormControl(result['id']),
        name:new FormControl(result['name']),
        dob:new FormControl(result['dob']),
        gender:new FormControl(result['gender']),
        dept:new FormControl(result['dept']),
        salary:new FormControl(result['salary']),
        location:new FormControl(result['location']),
      })

    })
  }

}

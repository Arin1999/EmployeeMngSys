import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-allemployee',
  templateUrl: './allemployee.component.html',
  styleUrls: ['./allemployee.component.css']
})
export class AllemployeeComponent implements OnInit {
  color: string;
  collection:any =[];
  currentDate=new Date().getFullYear();
  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe((success)=>{
      console.log(success)
      this.collection=success;
    });
  }
  deleteEmployee(id){
    this.service.deletedEmployeeById(id).subscribe((result)=>{
      this.service.getEmployees().subscribe((success)=>{
        console.log(success)
        this.collection=success
      });
    });
  }
}

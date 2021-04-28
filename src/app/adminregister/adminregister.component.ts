import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  user = new FormGroup({
    userid:new FormControl(''),    
    password:new FormControl('')
  })
  constructor(private service:UserService,private router: Router ) { }

  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.user.value);
    this.service.addUser(this.user.value).subscribe((success)=>{
      console.log("result is  here",success)
        this.router.navigate(['adminlogin']);
    });
  }
}

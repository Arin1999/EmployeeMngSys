import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user = new FormGroup({
    userid:new FormControl(''),    
    password:new FormControl('')
  })
  constructor(private service:UserService,private router: Router ) { }

  ngOnInit(): void {
  }
  loginUser(){
    
    console.log(this.user.value);
    this.service.checkUser(this.user.value).subscribe((success)=>{
      console.log("result is  here",success)
      if(success.length==1){
      localStorage.setItem('userid',this.user.value.userid);
      this.router.navigate(['adminlogin/allemployee']);
      }
      else{
        localStorage.removeItem('userid');
        alert("username or password not valid ");
        this.router.navigate(['adminlogin']);
      }
    });
  }
}

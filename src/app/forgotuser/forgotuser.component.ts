import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgotuser',
  templateUrl: './forgotuser.component.html',
  styleUrls: ['./forgotuser.component.css']
})
export class ForgotuserComponent implements OnInit {

  constructor(private service:UserService,private router: Router) { }
  user = new FormGroup({
    userid:new FormControl(''),    
  })
  changepassword:boolean=false;
  ngOnInit( ): void {
  }
checkUser(){
  this.service.checkUsername(this.user.value.userid).subscribe((success)=>{
    console.log("result is  here",success)
    this.user=new FormGroup({
      id:new FormControl(success[0].id),
      userid:new FormControl(success[0].userid),
      password:new FormControl(),
    })
    console.log("result is  here",this.user.value)
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
  console.log(this.user.value.id);
  this.service.updatepassword(this.user.value).subscribe((success)=>{
    console.log("result is  here",success)
    this.router.navigate(['adminlogin']);
  });
}

}

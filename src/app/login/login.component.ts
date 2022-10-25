import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUser:boolean=false;
  isLoggedIn:boolean=JSON.parse(localStorage.getItem('loggedIn')||'false'); 
  isLoggedOut:boolean=false;
  userNotFound:boolean=false;
  serverNotFound:boolean=false;
  errorDetails:string="";
  constructor(private authentication:AuthenticationService,private spinner: NgxSpinnerService,private router: Router) {
    
   }

  ngOnInit(): void {
    
  
  }

  toBool(a: any) {
    return Boolean(a).valueOf();
  }
  
 loginUser(data:any)
 {
  this.isLoggedOut=false;

  this.spinner.show();
 
  this.authentication.validateUser(data).subscribe((value:any)=>{
    this.serverNotFound=false;
    this.isUser=this.toBool(value)
    console.warn(value)
    if(this.isUser)
    {
      console.warn("User Logged In")
      this.router.navigate(['/tasks'])
    }
    else
    {
 
      this.userNotFound=true;
      console.warn("User Not Valid")
    }
    this.spinner.hide();
    
  },
  
  
  (err:any)=>{
    console.warn(err)
    this.userNotFound=false;
    this.serverNotFound=true;
    this.errorDetails=err.statusText;
    this.spinner.hide();
     })

 
 }

 logoutUser(){

  localStorage.setItem('loggedIn','false')
  this.isLoggedIn=false;
  this.isLoggedOut=true;
 }
 

}

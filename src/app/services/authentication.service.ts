import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private LoggedInStatus:boolean=false;
  private responseValue:any;
  constructor(private http:HttpClient) {}
  
  toBool(a: any) {
    return Boolean(a).valueOf();
  }
  setLoggedIn(value:boolean)
  {
    this.LoggedInStatus=value
    localStorage.setItem('loggedIn',value.toString())
  }
  isLoggedIn()
  {
    return JSON.parse(localStorage.getItem('loggedIn')||this.LoggedInStatus.toString())
  }
  validateUser(userData:any)
  {
    this.responseValue=this.http.post("https://localhost:7199/api/Authentication/ValidateUser",userData)
    this.responseValue.subscribe((value:any)=>{
    this.setLoggedIn(this.toBool(value))
    })
    

    return this.responseValue
  }
}

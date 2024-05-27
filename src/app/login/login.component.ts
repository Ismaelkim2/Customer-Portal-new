import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router,private http:HttpClient){}
phoneNumber:String='';
password:String=''

  ngOnInit() {
      
  }

  onLogin(){
    const loginData={phoneNumber:this.phoneNumber,password:this.password};
    this.http.post ( 'http://localhost:8080/api/user/login',loginData).subscribe(
      (response:any)=>{
        console.log('LOgin sucessful',response);
        alert (`Login sucessful`);
        this.router.navigate(['/otp']);

      },

      (error)=>{
        console.log('login failed',error);
        alert(`Wrong credentials`);
      }
    );
  }

  register(){
    this.router.navigate(["/registrations"])
  }

}


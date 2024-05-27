import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent{

  constructor(private router:Router){}

  verifyOtp(){

    this.router.navigate(['/home']);
  }

}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent {
  formData = { firstName: '', lastName: '', phoneNumber: '', password: '', above18: false  };

  constructor(private router:Router,private http:HttpClient) { }

  onSubmit() {
    this.http.post('http://localhost:8080/api/user/create', this.formData).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
      
        this.formData = {firstName: '', lastName: '', phoneNumber: '', password: '', above18: false };
      
        alert('Registration successful');
        this.router.navigate(["/login"]);
      },
      (error) => {
        console.error('Registration failed', error);

        alert('Registration failed');
      }
    );
  }
}


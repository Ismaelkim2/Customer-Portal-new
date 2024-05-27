import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {

  constructor (private router:Router){}

  bookclaims(){
    this.router.navigate(['book-claims'])
  }

}


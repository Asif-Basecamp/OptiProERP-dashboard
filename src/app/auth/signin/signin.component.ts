import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goToDashboard(){
    this.router.navigateByUrl('page/dashboard');
  }
}

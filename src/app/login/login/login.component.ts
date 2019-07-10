import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginRouter: Router) { }

  ngOnInit() {
  }

  login() {
    this.reRoute('/admin')
  }

  reRoute(path){
    this.loginRouter.navigate([path])
  }
}

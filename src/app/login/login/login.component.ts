import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../Config/config.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username;
  public password;
  constructor
  (
      private loginRouter: Router,
      private http: HttpClient,
      private Config: ConfigService,
  ) { }

  ngOnInit() {
    this.logincheck();
  }

  logincheck() {
    const tocken = localStorage.getItem('tocken');
    if (tocken === 'botzadmin') {
      this.reRoute('/admin');
    }
  }

  login() {
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.login}`;
    const body = {
      username: this.username,
      password: this.password,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':  'application/json',
      })
     };
    this.http.post(url, body, httpOptions).subscribe((response) => {
      if (response['status'] === 'success') {
        localStorage.setItem(this.Config.TOCKEN.keyname, this.Config.TOCKEN.keyvalue);
        this.reRoute('/admin');
      } else {
        Swal.fire({
          title: 'Login Failed',
          text: 'Incorrect username or password',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

  reRoute(path) {
    this.loginRouter.navigate([path]);
  }

}

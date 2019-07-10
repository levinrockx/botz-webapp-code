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
    const tocken = sessionStorage.getItem('tocken');
    if (tocken === 'botzadmin') {
      this.reRoute('/admin');
    }
  }

  login() {
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.login}`;
    console.log(this.username, this.password);
    const body = {
      username: this.username,
      password: this.password,
    };
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Accept':  'application/json',
    //   })
    //  };
    this.http.get(url).subscribe((response) => {
      if (response['status'] === 'success') {
        sessionStorage.setItem('tocken', 'botzadmin');
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

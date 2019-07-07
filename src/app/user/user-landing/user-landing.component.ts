import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent implements OnInit {

  constructor(
    private loginRouter: Router,
  ) { }

  ngOnInit() {
    this.loginRouter.navigate(['/home']);
  }

}

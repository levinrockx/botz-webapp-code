import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss']
})
export class DashboardLandingComponent implements OnInit {

  constructor(
    private dashboardRouter: Router,
  ) { }

  ngOnInit() {
    this.dashboardRouter.navigate(['admin/dashboard']);
  }

}

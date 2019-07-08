import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-header',
  templateUrl: './admin-dashboard-header.component.html',
  styleUrls: ['./admin-dashboard-header.component.scss']
})
export class AdminDashboardHeaderComponent implements OnInit {
  public flag: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showResponsiveMenu() {
    this.flag = !this.flag;
  }
  reRoute(routeName) {
    if (this.flag) {
      this.flag = false;
    }
    this.router.navigate([routeName]);
  }
}

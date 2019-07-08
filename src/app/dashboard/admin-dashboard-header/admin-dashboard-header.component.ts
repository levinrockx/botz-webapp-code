import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-header',
  templateUrl: './admin-dashboard-header.component.html',
  styleUrls: ['./admin-dashboard-header.component.scss']
})
export class AdminDashboardHeaderComponent implements OnInit {
  public flag: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showResponsiveMenu() {
    this.flag = !this.flag;
  }

}
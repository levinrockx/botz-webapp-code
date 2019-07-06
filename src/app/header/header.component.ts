import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public flag: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  reRoute(routeName) {
    if (this.flag) {
      this.flag = false;
    }
    this.router.navigate([routeName]);
  }

  showResponsiveMenu() {
    this.flag = !this.flag;
  }
}

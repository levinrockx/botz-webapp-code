import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardList;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getBlogAll();
  }

  getBlogAll() {
    this.http.get('http://127.0.0.1:5000/blogall').subscribe((response) => {
      this.cardList = response;
    });
  }

  reRoute(routeName) {
    this.router.navigate([routeName]);
  }

}

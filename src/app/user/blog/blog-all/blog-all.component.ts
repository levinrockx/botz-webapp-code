import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.scss']
})
export class BlogAllComponent implements OnInit {
  public cardList ;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBlogAll();
  }
  getBlogAll() {
    this.http.get('http://192.168.43.212:5000/blogall').subscribe((response) => {
      this.cardList = response;
    });
  }


  reRoute(routeName) {
    this.router.navigate([routeName]);
  }
}

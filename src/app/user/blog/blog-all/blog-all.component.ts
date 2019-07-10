import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from '../../../Config/config.service';
@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.scss']
})
export class BlogAllComponent implements OnInit {
  public cardList;

  constructor(
    private http: HttpClient,
    private router: Router,
    private Config: ConfigService,
  ) { }

  ngOnInit() {
    this.getBlogAll();
  }
  getBlogAll() {
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogall}`;
    this.http.get(url).subscribe((response) => {
      this.cardList = response;
    });
  }

  reRoute(routeName) {
    this.router.navigate([routeName]);
  }
}

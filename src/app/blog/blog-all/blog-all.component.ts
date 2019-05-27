import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.scss']
})
export class BlogAllComponent implements OnInit {
  public cardList;
  constructor( private http: HttpClient,) { }

  ngOnInit() {
    this.getBlogAll();
  }
  getBlogAll() {
    this.http.get('http://127.0.0.1:5000/blogall').subscribe((response) => {
      this.cardList = response;
    });
  }
}

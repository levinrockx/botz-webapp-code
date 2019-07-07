import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blogarticle',
  templateUrl: './blogarticle.component.html',
  styleUrls: ['./blogarticle.component.scss']
})
export class BlogarticleComponent implements OnInit {
  public cardList;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getBlogAll();
  }
  getBlogAll() {
    this.http.get('http://127.0.0.1:5000/blogall').subscribe((response) => {
      this.cardList = response;
    });
  }


}

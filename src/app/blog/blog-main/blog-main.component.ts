import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss']
})
export class BlogMainComponent implements OnInit {
  public selectedTab;
  
  constructor() { }

  ngOnInit() {
    this.TabSelected(0);
    console.log("hello");
  }
  TabSelected(index) {
    this.selectedTab = index;
  }
}

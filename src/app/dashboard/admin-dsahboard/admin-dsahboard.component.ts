import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dsahboard',
  templateUrl: './admin-dsahboard.component.html',
  styleUrls: ['./admin-dsahboard.component.scss']
})
export class AdminDsahboardComponent implements OnInit {
  public cardList;
  constructor(
    private http: HttpClient,
  ) { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.getBlogAll();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  getBlogAll() {
    this.http.get('http://192.168.43.212:5000/blogall').subscribe((response) => {
      this.cardList = response;
    });
  }
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Power4, Back, Expo } from 'gsap/all';
import { ConfigService } from '../../Config/config.service';
declare var TweenMax: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardList;
  @ViewChild('rowOne', { static: true }) rowOne: ElementRef;
  @ViewChild('rowTwo', { static: true }) rowTwo: ElementRef;
  @ViewChild('rowThree', { static: true }) rowThree: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
  ) { }

  ngOnInit() {
    this.startAnimation();
    this.getBlogAll();
  }
  startAnimation() {
    TweenMax.staggerFrom(
      [this.rowOne.nativeElement,
      this.rowTwo.nativeElement,
      this.rowThree.nativeElement], 1,
      {
        y: '100%',
        ease: Power4.easeOut,
        delay: 0.3
      }, 0.5);
  }

  getBlogAll() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.blogall}`;
    this.http.get(url).subscribe((response) => {
      this.cardList = response;
    });
  }

  reRoute(routeName) {
    this.router.navigate([routeName]);
  }

}

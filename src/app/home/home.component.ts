import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Power4, Back, Expo } from 'gsap/all';
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
        ease: Expo.easeInOut,
        delay:1
      }, 0.2);
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

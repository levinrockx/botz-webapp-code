import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Power4, Back, Expo } from 'gsap/all';
declare var TweenMax: any;
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  @ViewChild('icon', { static: true }) icon: ElementRef;
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ViewChild('content', { static: true }) content: ElementRef;
  constructor() { }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    TweenMax.fromTo(this.icon.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut });
    TweenMax.fromTo(this.heading.nativeElement, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power4.easeOut});
    TweenMax.fromTo(this.content.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.5 });
  }

}

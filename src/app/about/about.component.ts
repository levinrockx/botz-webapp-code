import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Power3, Back, Expo } from 'gsap/all';
declare var TweenMax: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('rowOne', { static: true }) rowOne: ElementRef;
  @ViewChild('rowTwo', { static: true }) rowTwo: ElementRef;
  @ViewChild('containerTwo', { static: true }) containerTwo: ElementRef;
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ViewChild('paragraph', { static: true }) paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    TweenMax.fromTo(this.rowTwo.nativeElement, 1, { opacity: 1, top: -2000 }, { top: 0, ease: Expo.easeInOut });
    TweenMax.fromTo(this.rowOne.nativeElement, 1, { opacity: 0 }, { opacity: 1, ease: Expo.easeOut, delay: 1 });
    TweenMax.fromTo(this.heading.nativeElement, 1, { y: 50 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.paragraph.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.containerTwo.nativeElement, 1, { opacity: 0 }, { opacity: 1, ease: Power3.easeOut, delay: 1 });
  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Power4, Back, Expo } from 'gsap/all';
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
    // TweenMax.fromTo(this.rowTwo.nativeElement, 1, { opacity: 1, top: -2000 }, { top: 0, ease: Expo.easeInOut });
    // TweenMax.fromTo(this.rowOne.nativeElement, 1, { opacity: 0 }, { opacity: 1, delay: 1 });
    TweenMax.fromTo(this.heading.nativeElement, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power4.easeOut });
    TweenMax.fromTo(this.paragraph.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.5 });
    // TweenMax.fromTo(this.containerTwo.nativeElement, 1, { opacity: 0 }, { opacity: 1, ease: Power4.easeOut, delay: 1 });
  }

}

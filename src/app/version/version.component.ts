import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Power4, Back, Expo } from 'gsap/all';
declare var TweenMax: any;
@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  @ViewChild('headingOne', { static: true }) headingOne: ElementRef;
  @ViewChild('contentOne', { static: true }) contentOne: ElementRef;
  @ViewChild('headingTwo', { static: true }) headingTwo: ElementRef;
  @ViewChild('contentTwo', { static: true }) contentTwo: ElementRef;
  constructor() { }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    TweenMax.fromTo(this.headingOne.nativeElement, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power4.easeOut });
    TweenMax.fromTo(this.contentOne.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.5 });
    TweenMax.fromTo(this.headingTwo.nativeElement, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 1 });
    TweenMax.fromTo(this.contentTwo.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 1.5 });
  }

}

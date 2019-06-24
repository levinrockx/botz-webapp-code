import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Power4, Back, Expo } from 'gsap/all';
declare var TweenMax: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('ContainerOne', { static: true }) containerOne: ElementRef;
  @ViewChild('para', { static: true }) para: ElementRef;
  @ViewChild('head', { static: true }) head: ElementRef;
  @ViewChild('rowOne', { static: true }) rowOne: ElementRef;


  constructor() { }

  ngOnInit() {
    this.startAnimation();
  }
  startAnimation() {
    TweenMax.fromTo(this.head.nativeElement, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power4.easeOut });
    TweenMax.fromTo(this.para.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.5 });
    // TweenMax.fromTo(this.head.nativeElement, 1, { opacity: 1, top: -2000 }, { top: 0, ease: Expo.easeInOut });
    // TweenMax.fromTo(this.containerOne.nativeElement, 1, { opacity: 0 }, { opacity: 1, delay: 0 });
  }
}

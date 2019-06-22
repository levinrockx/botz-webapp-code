import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Power3, Back, Expo } from 'gsap/all';
declare var TweenMax: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('rowOne', { static: true }) rowOne: ElementRef;
  @ViewChild('rowTwo', { static: true }) rowTwo: ElementRef;
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ViewChild('head', { static: true }) head: ElementRef;
  @ViewChild('cardOne', { static: true }) cardOne: ElementRef;
  @ViewChild('cardTwo', { static: true }) cardTwo: ElementRef;
  @ViewChild('cardThree', { static: true }) cardThree: ElementRef;
  @ViewChild('cardFour', { static: true }) cardFour: ElementRef;
  @ViewChild('cardFive', { static: true }) cardFive: ElementRef;
  @ViewChild('cardSix', { static: true }) cardSix: ElementRef;
  @ViewChild('para', { static: true }) para: ElementRef;
  @ViewChild('designHead', { static: true }) designHead: ElementRef;
  @ViewChild('paraTwo', { static: true }) paraTwo: ElementRef;
  @ViewChild('containerTwo', { static: true }) containerTwo: ElementRef;


  constructor() { }

  ngOnInit() {
    this.startAnimation();
  }
  startAnimation() {
    TweenMax.fromTo(this.cardOne.nativeElement, 1, { opacity: 1, top: 12000 }, { top: 0, ease: Expo.easeInOut });
    TweenMax.fromTo(this.cardTwo.nativeElement, 1, { opacity: 1, top: 10000 }, { top: 0, ease: Expo.easeInOut });
    TweenMax.fromTo(this.cardThree.nativeElement, 1, { opacity: 1, top: 8000 }, { top: 0, ease: Expo.easeInOut });
    TweenMax.fromTo(this.cardFour.nativeElement, 1, { opacity: 1, top: 6000 }, { top: 0, ease: Expo.easeInOut });
    TweenMax.fromTo(this.cardFive.nativeElement, 1, { opacity: 1, top: 4000 }, { top: 0, ease: Expo.easeInOut });

    TweenMax.fromTo(this.cardSix.nativeElement, 1, { opacity: 1, top: 2000 }, { top: 0, ease: Expo.easeInOut });
    TweenMax.fromTo(this.rowOne.nativeElement, 1, { opacity: 0 }, { opacity: 1, delay: 1 });
    TweenMax.fromTo(this.heading.nativeElement, 1, { y: 50 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.head.nativeElement, 1, { y: 50 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    // TweenMax.fromTo(this.designHead.nativeElement, 1, { y: 50 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.cardOne.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.cardTwo.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.cardThree.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.cardFour.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.cardFive.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.cardSix.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    // TweenMax.fromTo(this.para.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    // TweenMax.fromTo(this.paraTwo.nativeElement, 1, { y: 100 }, { y: 0, ease: Power3.easeOut, delay: 1 });
    TweenMax.fromTo(this.containerTwo.nativeElement, 1, { opacity: 0 }, { opacity: 1, ease: Power3.easeOut, delay: 1 });
  }
}

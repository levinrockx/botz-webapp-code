import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Power4, Back, Expo } from 'gsap/all';
import { Router } from '@angular/router';
import { viewClassName } from '@angular/compiler';
declare var TweenMax: any;

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ViewChild('card', { static: true }) card: ElementRef;
  @ViewChild('wrapper', { static: true }) wrapper: ElementRef;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    TweenMax.fromTo(this.heading.nativeElement, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Power4.easeOut });
    TweenMax.fromTo(this.card.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.5 });
    TweenMax.fromTo(this.wrapper.nativeElement, 1, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power4.easeOut, delay: 0.5 });
  }

  reRoute(routeName) {
    this.router.navigate([routeName]);
  }

}


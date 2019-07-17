import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttplayerService } from '../../HttpService/httplayer.service';
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
  @ViewChild('mainRow', { static: true }) mainRow: ElementRef;
  @ViewChild('rowOne', { static: true }) rowOne: ElementRef;
  @ViewChild('rowTwo', { static: true }) rowTwo: ElementRef;
  @ViewChild('rowThree', { static: true }) rowThree: ElementRef;
  @ViewChild('bgVideo', { static: true }) bgVideo: ElementRef;

  constructor(
    private httpLayer: HttplayerService,
    private router: Router,
    private config: ConfigService,
  ) { }

  ngOnInit() {
    this.startVideo();
    this.startAnimation();
    this.getBlogAll();
  }

  startVideo() {
    this.bgVideo.nativeElement.play();
  }

  startAnimation() {
    const containerWidth = this.mainRow.nativeElement.offsetWidth;
    if (containerWidth > 576) {
      TweenMax.staggerFrom(
        [this.rowOne.nativeElement,
        this.rowTwo.nativeElement,
        this.rowThree.nativeElement], 1,
        {
          y: '100%',
          ease: Power4.easeOut,
          delay: 0.3
        }, 0.5);
    } else {
      TweenMax.staggerFrom(
        [this.rowOne.nativeElement,
        this.rowTwo.nativeElement,
        this.rowThree.nativeElement], 1,
        {
          y: '200%',
          ease: Power4.easeOut,
          delay: 0.3
        }, 0.5);
    }
  }

  getBlogAll() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.blogall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.cardList = response;
    });
  }

  reRoute(routeName) {
    this.router.navigate([routeName]);
  }

  blogopen(id) {
    const url = `/blogarticle/${id}`;
    this.reRoute(url);
  }

}

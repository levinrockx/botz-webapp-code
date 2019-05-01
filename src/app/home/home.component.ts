import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardList = [
    {
      date: "17th March 2019",
      title: "Heading of Blog Post One",
      desc:"Lorem ipsum is a mockup text used for webdesign and other things..",
    },
    {
      date: "18th March 2019",
      title: "Heading of Blog Post Two",
      desc:"Lorem ipsum is a mockup text used for webdesign and other things..",
    },
    {
      date: "19th March 2019",
      title: "Heading of Blog Post Three",
      desc:"Lorem ipsum is a mockup text used for webdesign and other things..",
    },
    {
      date: "20th March 2019",
      title: "Heading of Blog Post Four",
      desc:"Lorem ipsum is a mockup text used for webdesign and other things..",
    },
    {
      date: "21th March 2019",
      title: "Heading of Blog Post Five",
      desc:"Lorem ipsum is a mockup text used for webdesign and other things..",
    },
    {
      date: "22nd March 2019",
      title: "Heading of Blog Post Six",
      desc:"Lorem ipsum is a mockup text used for webdesign and other things..",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

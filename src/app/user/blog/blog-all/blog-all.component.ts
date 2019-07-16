import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../Config/config.service';
import { HttplayerService } from '../../../HttpService/httplayer.service';
@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.scss']
})
export class BlogAllComponent implements OnInit {
  public cardList;

  constructor(
    private router: Router,
    private Config: ConfigService,
    private httpLayer: HttplayerService,
  ) { }

  ngOnInit() {
    this.getBlogAll();
  }

  getBlogAll() {
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.cardList = response;
    })
  }

  reRoute(routeName) {
    this.router.navigate([routeName]);
  }

  blogPost(id) {
    const url= `/blogarticle/${id}`;
    this.reRoute(url);
  }

}

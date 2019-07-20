import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttplayerService } from '../../../HttpService/httplayer.service';
import { ConfigService } from '../../../Config/config.service';
@Component({
  selector: 'app-blogarticle',
  templateUrl: './blogarticle.component.html',
  styleUrls: ['./blogarticle.component.scss']
})
export class BlogarticleComponent implements OnInit {
  public blogId;
  public blog = {
    'title': '',
    'author': '',
    'desc': '',
    'tags':[],
    'date':'',
  };
  public cardList = [];
  constructor(
    private route: ActivatedRoute,
    private httpLayer: HttplayerService,
    private Config: ConfigService
  ) { }

  ngOnInit() {
    this.getBlogId();
    this.getBlogPost();
  }

  getBlogId() {
    this.route.params.subscribe(params => {
      this.blogId = params.id;
    });
  }

  getBlogPost() {
    const body = {
      id: this.blogId
    }
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogpost}`;
    this.httpLayer.post(url, body).subscribe((response) => {
      // console.log(response);
      if (response['status'] === 'success') {
        this.blog = {
          'title': response['data']['title'],
          'desc': response['data']['desc'],
          'author': response['data']['author'],
          'date': response['data']['date'],
          'tags': response['data']['tags']
        };
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../../Config/config.service';
@Component({
  selector: 'app-admin-dsahboard',
  templateUrl: './admin-dsahboard.component.html',
  styleUrls: ['./admin-dsahboard.component.scss']
})
export class AdminDsahboardComponent implements OnInit {
  public cardList;
  public editmodaltitle;
  public date = new Date();
  public dropdownList = [
    { 'id': 1, 'itemName': 'Electornics' },
    { 'id': 2, 'itemName': 'Computer Science' },
    { 'id': 3, 'itemName': 'Robotics' },
    { 'id': 4, 'itemName': 'Embedded Programming' }
  ];

  public dropdownSettings = {
    singleSelection: false,
    text: 'Tags',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: 'multi-select'
  };

  dtOptions: DataTables.Settings = {};
  public blog = {
    title: '',
    desc: '',
    date: '',
    author: '',
    tags: [],
  };

  constructor(
    private httpLayer: HttplayerService,
    private modalService: NgbModal,
    private Config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.getBlogAll();
    this.dtOptions = {
    };
  }

  getBlogAll() {
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.cardList = response;
    });
  }

  openModal(modalId) {
    this.modalService.open(modalId, {
      size: 'lg',
      centered: true,
    });
  }

  openeditModal(modalId, i) {
    this.editmodaltitle = this.cardList[i]['title'];
    this.openModal(modalId);
  }

  addBlog() {
    this.blog.date = `${this.date.getUTCDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear()}`;
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogadd}`;
    this.httpLayer.post(url, this.blog).subscribe((response) => {
      if (response['status'] === 'success') {
        this.modalService.dismissAll();
        this.getBlogAll();
      }
    });
  }

}

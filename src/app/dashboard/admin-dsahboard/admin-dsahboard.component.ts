import { Component, OnInit } from '@angular/core';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../../Config/config.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-dsahboard',
  templateUrl: './admin-dsahboard.component.html',
  styleUrls: ['./admin-dsahboard.component.scss']
})
export class AdminDsahboardComponent implements OnInit {
  public cardList;
  public editmodaltitle;
  public deleteblogid;
  public editblogid;
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

  openAddModal(modalId) {
    this.blog = {
      title: '',
      desc: '',
      date: '',
      author: '',
      tags: [],
    };
    this.openModal(modalId);
  }

  addBlog() {
    this.blog.date = `${this.date.getUTCDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear()}`;
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogadd}`;
    this.httpLayer.post(url, this.blog).subscribe((response) => {
      if (response['status'] === 'success') {
        this.modalService.dismissAll();
        this.getBlogAll();
        Swal.fire({
          title: this.blog.title,
          text: 'Blog added successfully',
          type: 'success',
          confirmButtonText: 'Ok'
        });
      } else {
        Swal.fire({
          title: this.blog.title,
          text: 'Blog adding falied',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

  openeditModal(modalId, i) {
    this.editmodaltitle = this.cardList[i]['title'];
    this.editblogid = this.cardList[i]['_id']['$oid'];
    const body = {
      id: this.cardList[i]._id.$oid,
    };
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogpost}`;
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        this.blog = {
          title: response['data']['title'],
          desc: response['data']['desc'],
          date: response['data']['date'],
          author: response['data']['author'],
          tags: response['data']['tags'],
        };
        this.openModal(modalId);
      } else {
        Swal.fire({
          title: this.editmodaltitle,
          text: 'Blog update falied',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

  editBlog() {
    const body = {
      id: this.editblogid,
      title: this.blog.title,
      desc: this.blog.desc,
      date: this.blog.date,
      tags: this.blog.tags,
      author: this.blog.author,
    };
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogupdate}`;
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        this.getBlogAll();
        this.modalService.dismissAll();
        Swal.fire({
          title: this.blog.title,
          text: 'Blog updated successfully',
          type: 'success',
          confirmButtonText: 'Ok'
        });
      } else {
        Swal.fire({
          title: this.blog.title,
          text: 'Blog updation falied',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

  opendeleteModal(modalId, i) {
    this.editmodaltitle = this.cardList[i]['title'];
    this.deleteblogid = this.cardList[i]['_id']['$oid'];
    this.openModal(modalId);
  }

  deleteblog() {
    const body = {
      id: this.deleteblogid,
    };
    const url = `${this.Config.API_ENDPOINT}${this.Config.API_ENDPOINT_NAMES.blogdelete}`;
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        this.modalService.dismissAll();
        this.getBlogAll();
        Swal.fire({
          title: this.blog.title,
          text: 'Blog deleted successfully',
          type: 'success',
          confirmButtonText: 'Ok'
        });
      } else {
        Swal.fire({
          title: this.blog.title,
          text: 'Blog deletion falied',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      }
    })
  }

}

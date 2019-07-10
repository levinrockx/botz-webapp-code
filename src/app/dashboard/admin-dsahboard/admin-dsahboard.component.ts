import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin-dsahboard',
  templateUrl: './admin-dsahboard.component.html',
  styleUrls: ['./admin-dsahboard.component.scss']
})
export class AdminDsahboardComponent implements OnInit {
  public cardList;
  dtOptions: DataTables.Settings = {};
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getBlogAll();
    this.dtOptions = {
    };
  }

  getBlogAll() {
    this.http.get('http://192.168.43.212:5000/blogall').subscribe((response) => {
      this.cardList = response;
    });
  }

  openModal(modalId) {
    this.modalService.open(modalId, {
      size: 'lg',
      centered: true,
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  dtOptions: DataTables.Settings = {};
  constructor(
    private http: HttpClient,
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
    this.http.get(url).subscribe((response) => {
      this.cardList = response;
    });
  }

  openModal(modalId) {
    this.modalService.open(modalId, {
      size: 'lg',
      centered: true,
    });
  }

  openeditModal(modalId,i) {
    this.editmodaltitle = this.cardList[i]['title'];
    this.openModal(modalId);
  }

}

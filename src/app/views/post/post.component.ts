import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/posts';
import { AppService } from '../../app.service';
import { HttpParams } from '@angular/common/http';
import { ModalService } from '../../shared/services/modal.service';
import { Router } from '@angular/router';
import { DialogService } from '../../shared/services/dialog.service';
import { TOAST_STATE, ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  dataPost: Posts[] = [];
  dataSorting: Posts[] = [];
  dataView?: Posts;

  page: number = 0;
  limit: number = 10;
  loading: boolean = false;
  loadingDetail: boolean = false;

  constructor(
    private appService: AppService,
    private modal: ModalService,
    private dialog: DialogService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    let params = new HttpParams();
    params = params.append('_start', this.page.toString());
    params = params.append('_limit', this.limit.toString());

    this.appService.getPost().subscribe({
      next: (data) => {
        this.dataPost = data;
        this.loading = false;
        this.pagination(this.dataPost);
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }

  pagination(data: Posts[]) {
    this.dataSorting = data.slice(
      this.page * this.limit,
      this.limit * (this.page + 1)
    );
  }

  pageChange(page: number) {
    this.page = page - 1;
    this.pagination(this.dataPost);
  }

  view(id: number): void {
    this.loadingDetail = true;
    this.modal.show('modal-view');
    this.appService.gePostByID(id).subscribe({
      next: (data) => {
        this.dataView = data;
        this.loadingDetail = false;
      },
    });
  }

  update(id: number) {
    this.router.navigate(['post/update/' + id]);
  }

  delete(index: number) {
    this.dialog
      .showDialog(
        'Are You Sure?',
        'Do you really want delete these records? This process cannot be undone.'
      )
      .subscribe((confirm) => {
        if (confirm) {
          this.appService.delete(index).subscribe((_) => {
            this.toast.showToast('Data has been deleted', TOAST_STATE.danger);
            this.getData();
          });
        }
      });
  }

  clickStopper(event: any) {
    event.stopPropagation();
    return;
  }
}

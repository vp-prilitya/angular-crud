import { Component, Input, OnInit } from '@angular/core';
import { Posts } from '../../../models/posts';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
  selector: 'detail-post',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() data?: Posts;
  @Input() id?: string;
  @Input() loading?: boolean;

  title?: string;

  constructor(public modal: ModalService) {
    this.title = 'Detail Employee';
  }

  ngOnInit(): void {}
}

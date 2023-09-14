import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';
import {
  TOAST_STATE,
  ToastService,
} from '../../../shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../../../models/posts';

@Component({
  selector: 'app-form-posts',
  templateUrl: './form-posts.component.html',
  styleUrls: ['./form-posts.component.css'],
})
export class FormPostsComponent implements OnInit {
  formData!: FormGroup;
  submit: boolean = false;
  loading: boolean = false;
  title?: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: AppService,
    private toast: ToastService,
    private route: ActivatedRoute
  ) {
    this.formData = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.title = 'Create';
    if (this.route.snapshot.paramMap.get('id')) {
      this.title = 'Update';
      this.getData();
    }
  }

  create() {
    this.submit = true;
    if (this.formData.invalid) {
      return;
    }

    this.loading = true;
    if (!this.route.snapshot.paramMap.get('id')) {
      this.service.createPost(this.formData.value).subscribe((data) => {
        this.router.navigate(['/post']);
        this.loading = false;
        this.toast.showToast('Created Success!', TOAST_STATE.success);
      });
    } else {
      this.service
        .updatePost(
          parseInt(this.route.snapshot.paramMap.get('id')!),
          this.formData.value
        )
        .subscribe((data) => {
          this.router.navigate(['/post']);
          this.loading = false;
          this.toast.showToast('Updated Success!', TOAST_STATE.warning);
        });
    }
  }

  close() {
    this.router.navigate(['/post']);
  }

  getData() {
    this.service
      .gePostByID(parseInt(this.route.snapshot.paramMap.get('id')!))
      .subscribe((data: Posts) => {
        this.formData.setValue({
          title: data.title,
          body: data.body,
          userId: data.userId,
        });
      });
  }
}

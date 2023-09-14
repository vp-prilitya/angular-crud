import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PostRoutingModule } from './post.routing';
import { PostComponent } from './post.component';
import { DetailComponent } from './detail/detail.component';
import { FormPostsComponent } from './form-posts/form-posts.component';

@NgModule({
  declarations: [PostComponent, DetailComponent, FormPostsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PostModule {}

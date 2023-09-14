import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { FormPostsComponent } from './form-posts/form-posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
  {
    path: 'create',
    component: FormPostsComponent,
  },
  {
    path: 'update/:id',
    component: FormPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}

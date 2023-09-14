import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule, NgApexchartsModule, PostModule],
})
export class ViewsModule {}

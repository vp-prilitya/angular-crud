import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './shared/default-layout/default-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from './shared/services/dialog.service';
import { ToastService } from './shared/services/toast.service';
import { ToastComponent } from './shared/components/toast/toast.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { ViewsModule } from './views/views.module';

import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [AppComponent, ToastComponent, DialogComponent],
  providers: [ToastService, DialogService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultLayoutModule,
    ViewsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
  ],
})
export class AppModule {}

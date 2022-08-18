import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import { ToastrModule } from 'ngx-toastr';
import {DatePipe} from "@angular/common";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {ContainerModule} from "./container/container.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ContainerModule,
    NoopAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [authInterceptorProviders,[DatePipe], /* optional */
  ],  bootstrap: [AppComponent]
})
export class AppModule { }

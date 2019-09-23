import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from './ui/layout/layout.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './db/in-memory-database';
import { ToastModule } from './components/toast/toast.module';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase, {delay: 100}),
    ToastModule.forRoot(),
  ],
  exports: [
    // modules
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ToastModule
  ],
  entryComponents: [],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}]
})
export class CoreModule { }

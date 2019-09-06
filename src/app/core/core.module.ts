import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './ui/layout/layout.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './db/in-memory-database';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase, {delay: 100}),
  ],
  exports: [
    // modules
    LayoutModule,
    HttpClientModule,

    // components
    HomeComponent
  ]
})
export class CoreModule { }

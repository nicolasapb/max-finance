import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './ui/layout/layout.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    LayoutModule,
    HomeComponent
  ]
})
export class CoreModule { }

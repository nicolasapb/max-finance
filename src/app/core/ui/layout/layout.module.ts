import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    ClarityModule,
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    ClarityModule,

    LayoutComponent
  ]
})
export class LayoutModule { }

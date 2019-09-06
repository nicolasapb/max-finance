import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { IMaskModule } from 'angular-imask';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { AccountPipe } from './pipes/account.pipe';
import { ClarityModule } from '@clr/angular';
import { PageHeaderComponent } from './components/page-header/page-header.component';


@NgModule({
  declarations: [CnpjPipe, AccountPipe, PageHeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule,
    IMaskModule,
  ],
  exports: [
    // Shared Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule,
    IMaskModule,

    // Shared Components

    // Shared Pipes
    CnpjPipe,
    AccountPipe,
    PageHeaderComponent
  ],
  providers: []
})
export class SharedModule { }

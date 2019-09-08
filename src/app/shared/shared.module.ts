import { NgModule, LOCALE_ID } from '@angular/core';
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
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';

@NgModule({
  declarations: [
    CnpjPipe,
    AccountPipe,
    PageHeaderComponent,
    DateFilterComponent,
    FormFieldErrorComponent,
  ],
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
    CnpjPipe,
    AccountPipe,
    PageHeaderComponent,
    DateFilterComponent,
    FormFieldErrorComponent
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  entryComponents: []
})
export class SharedModule { }

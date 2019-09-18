import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CnpjPipe,
    AccountPipe,
    PageHeaderComponent,
    DateFilterComponent,
    FormFieldErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule,
    IMaskModule,
    ChartsModule
  ],
  exports: [
    // Shared Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule,
    IMaskModule,
    ChartsModule,

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

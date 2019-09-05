import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingListComponent } from './saving-list/saving-list.component';


@NgModule({
  declarations: [SavingListComponent],
  imports: [
    CommonModule,
    SavingsRoutingModule
  ]
})
export class SavingsModule { }

import { NgModule } from '@angular/core';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingListComponent } from './saving-list/saving-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SavingListComponent],
  imports: [
    SharedModule,
    SavingsRoutingModule
  ]
})
export class SavingsModule { }

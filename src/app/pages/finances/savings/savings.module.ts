import { NgModule } from '@angular/core';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingListComponent } from './saving-list/saving-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SavingFormComponent } from './saving-form/saving-form.component';


@NgModule({
  declarations: [SavingListComponent, SavingFormComponent],
  imports: [
    SharedModule,
    SavingsRoutingModule
  ]
})
export class SavingsModule { }

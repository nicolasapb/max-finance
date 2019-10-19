import { NgModule } from '@angular/core';

import { ProcurementRoutingModule } from './procurement-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcurementListComponent } from './procurement-list/procurement-list.component';


@NgModule({
  declarations: [ProcurementListComponent],
  imports: [
    SharedModule,
    ProcurementRoutingModule
  ]
})
export class ProcurementModule { }

import { NgModule } from '@angular/core';

import { ProcurementRoutingModule } from './procurement-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcurementListComponent } from './procurement-list/procurement-list.component';
import { ProcurementFormComponent } from './procurement-form/procurement-form.component';


@NgModule({
  declarations: [ProcurementListComponent, ProcurementFormComponent],
  imports: [
    SharedModule,
    ProcurementRoutingModule
  ]
})
export class ProcurementModule { }

import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Procurement } from '../shared/procurement.model';
import { ProcurementService } from '../shared/procurement.service';

@Component({
  selector: 'app-procurement-list',
  templateUrl: './procurement-list.component.html',
  styleUrls: ['./procurement-list.component.css']
})
export class ProcurementListComponent extends BaseResourceList<Procurement> {

  constructor(
    protected injector: Injector,
    protected procurementService: ProcurementService,
  ) {
    super(injector, procurementService);
  }

}

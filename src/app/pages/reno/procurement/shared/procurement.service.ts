import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Procurement } from './procurement.model';

@Injectable({
  providedIn: 'root'
})
export class ProcurementService extends BaseResourceService<Procurement> {

  constructor(protected injector: Injector) {
    super('/procurements', injector, Procurement.fromJson);
  }
}

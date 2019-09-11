import { Component, OnInit, Injector, Input } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-forms/base-resource-forms.component';
import { Simulation } from '../shared/simulation.model';
import { SimulationService } from '../shared/simulation.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css']
})
export class SimulationFormComponent extends BaseResourceFormComponent<Simulation> {

  @Input() totals = [];
  protected today: string;

  constructor(
    protected injector: Injector,
    protected simulationService: SimulationService
  ) {
    super(injector, new Simulation(), simulationService, Simulation.fromJson);
    this.today = new Date().toLocaleDateString();
  }

  protected setCurrentaction(): void {
    this.currencAction = 'new';
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      composition: this.formBuilder.group({
        id: [null],
        composition: [null, [Validators.required]],
        total: [null, [Validators.required]],
        entry: [{value: null}, [Validators.required]],
        entryPct: [{value: null}, [Validators.required]],
        funding: [{value: null}, [Validators.required]],
        fundingPct: [{value: null}, [Validators.required]],
        renovation: [{value: null}, [Validators.required]]
      }),
      installment: this.formBuilder.group({
        installment: [null, [Validators.required]],
        fundFees: [false, [Validators.required]],
        composeIncome: [false, [Validators.required]]
      }),
      conditions: this.formBuilder.group({
        interest: [null, [Validators.required]],
        interestAM: [null, [Validators.required]],
        cet: [null, [Validators.required]],
        cesh: [null, [Validators.required]],
        term: [null, [Validators.required]],
        simDate: [this.today, [Validators.required]]
      })
    });
  }

  submit(): void {
    console.log(this.resourceForm.value);
  }

}

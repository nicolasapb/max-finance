import { Component, OnInit, Injector, Input, AfterViewInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-forms/base-resource-forms.component';
import { Simulation } from '../shared/simulation.model';
import { SimulationService } from '../shared/simulation.service';
import { Validators } from '@angular/forms';

interface TotalAmountSelect {
  type: string;
  amount: number;
  checked: boolean;
}
@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css']
})
export class SimulationFormComponent extends BaseResourceFormComponent<Simulation> implements OnInit {

  @Input() totals = [];
  @Input() contractValue: string;
  @Input() contractEntry: string;
  @Input() prevTotal: string;
  protected today: string;
  public totalsSelected: TotalAmountSelect[] = [];

  constructor(
    protected injector: Injector,
    protected simulationService: SimulationService
  ) {
    super(injector, new Simulation(), simulationService, Simulation.fromJson);
    this.today = new Date().toLocaleDateString();
  }

  ngOnInit(): void {
    super.ngOnInit(); 
    Object.keys(this.totals).forEach( key => {
      if (this.totals.hasOwnProperty(key) && (this.totals[key].type !== 'FGTS')) {
        this.totalsSelected.push({type: this.totals[key].type, amount: this.totals[key].amount, checked: false});
      }
    });
  }

  protected createResource(): void {

    const resource: Simulation = new Simulation();
    const values = Object.values(this.resourceForm.value);
    values.map( value => Object.entries(value).forEach((key) => resource[key[0]] = key[1]));
    this.resourceService.create(resource)
      .subscribe({
        next: newResource => this.actionsForSuccess(newResource, 'Item criado com sucesso'),
        error: error => this.actionsForError(error)
      });
  }

  protected setCurrentaction(): void {
    this.currencAction = 'new';
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      compositionGroup: this.formBuilder.group({
        id: [null],
        composition: [null, [Validators.required]],
        total: [null, [Validators.required]],
        entry: [this.contractEntry, [Validators.required]],
        entryPct: [null, [Validators.required]],
        funding: [null, [Validators.required]],
        fundingPct: [null, [Validators.required]],
        renovation: [null, [Validators.required]]
      }),
      installmentGroup: this.formBuilder.group({
        installment: [null, [Validators.required]],
        fundFees: [false, [Validators.required]],
        composeIncome: [true, [Validators.required]]
      }),
      conditionsGroup: this.formBuilder.group({
        interest: [null, [Validators.required]],
        interestAM: [null, [Validators.required]],
        cet: [null, [Validators.required]],
        cesh: [null, [Validators.required]],
        term: [null, [Validators.required]],
        simDate: [this.today, [Validators.required]]
      })
    });
  }

  onClick(checked: boolean, value: TotalAmountSelect): void {
    value.checked = checked;
    const composition: TotalAmountSelect[] = [];
    this.totalsSelected.filter(filter => filter.checked)
      .forEach( selected => composition.push(selected));
    let compositionText = '';
    let compositionAmount = 0;
    composition.forEach( comp => {
      compositionText === ''
      ? compositionText = comp.type
      : compositionText = compositionText + ' + ' + comp.type;

      compositionAmount += comp.amount;
    });

    const totalEntry = +this.contractEntry + compositionAmount;
    const entryPct = ( totalEntry / +this.contractValue ) * 100;
    const funding = +this.contractValue - totalEntry;
    const fundingPct = 100 - entryPct;
    const renovation = +this.prevTotal - compositionAmount;
    this.resourceForm.get(['compositionGroup', 'composition']).patchValue(compositionText);
    this.resourceForm.get(['compositionGroup', 'total']).patchValue(compositionAmount.toString());
    this.resourceForm.get(['compositionGroup', 'entry']).patchValue(totalEntry.toString());
    this.resourceForm.get(['compositionGroup', 'entryPct']).patchValue(entryPct.toString());
    this.resourceForm.get(['compositionGroup', 'funding']).patchValue(funding.toString());
    this.resourceForm.get(['compositionGroup', 'fundingPct']).patchValue(fundingPct.toString());
    this.resourceForm.get(['compositionGroup', 'renovation']).patchValue(renovation.toString());
  }

  protected navigateToDisplay(): void {
    const parentComponentPath: string = this.route.snapshot.parent.url[0].path;
    const baseComponentPath: string = this.route.snapshot.url[0].path;
    this.router.navigateByUrl(parentComponentPath, {skipLocationChange: true})
      .then(
        () => this.router.navigate([parentComponentPath, baseComponentPath])
      );
  }

}

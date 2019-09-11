import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Simulation } from '../shared/simulation.model';
import { Saving } from '../../savings/shared/saving.model';
import { SimulationService } from '../shared/simulation.service';
import { SavingService } from '../../savings/shared/saving.service';

export interface TotalAmount {
  type: string;
  amount: number;
}

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html',
  styleUrls: ['./simulation-list.component.css']
})
export class SimulationListComponent extends BaseResourceList<Simulation> implements OnInit {

  public savings: Saving[];
  public prevTotalByType: TotalAmount[] = [];
  public prevTotal: number;
  public totalCompostion: number;
  public compostion: string;
  public simulation: Simulation;
  public contractValue = 510381.00;
  public contractEntry = 118000.00;
  public showForm = false;

  constructor(
    protected simulationService: SimulationService,
    protected savingService: SavingService,
    protected injector: Injector
  ) {
    super(injector, simulationService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getSavingsPrevision();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Saving.types)
      .map(([value, text]) => {
        return { text, value };
      });
  }

  getTypeText(type: string): string {
    const found = this.typeOptions.find( check => check.value === type);
    return found.text;
  }

  protected getSavingsPrevision(): void {

    // due to backend limitations, all records are retrieved and then filtered
    this.savingService.getAll().subscribe({
      next: savings => {
        this.savings = savings;
        this.buildPrevTotal();
      },
      error: error => this.actionsForError('erro ao recuperar as economias', error)
    });
  }

  protected buildPrevTotal(): void {
    this.prevTotalByType = [];
    this.sumByTypeAndSimulationValue(this.prevTotalByType, true);
    this.prevTotal = this.prevTotalByType.reduce( (val, entry) => val + +entry.amount, 0 );
  }

  protected sumByTypeAndSimulationValue(totalByType: Array<TotalAmount>, simValue: boolean) {
    const sum = {};

    this.savings.filter(saving => saving.simulation === simValue)
      .map(saving => {
        return { type: this.getTypeText(saving.type), amount: +saving.amount };
      })
      .forEach(entry => {
        if (!sum[entry.type]) {
          sum[entry.type] = 0;
        }
        sum[entry.type] += +entry.amount;
      });

    Object.keys(sum).forEach(key => {
      if (sum.hasOwnProperty(key)) {
        totalByType.push({type: key, amount: sum[key]});
      }
    });

  }

}

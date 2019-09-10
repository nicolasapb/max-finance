import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { SavingService } from '../shared/saving.service';
import { Saving } from '../shared/saving.model';
import { SavingDateSorter } from '../shared/saving-date-sorter';
import { SavingAmountFilter } from '../shared/saving-amount-filter';


export interface TotalAmount {
  type: string;
  amount: number;
}

@Component({
  selector: 'app-saving-list',
  templateUrl: './saving-list.component.html',
  styleUrls: ['./saving-list.component.css']
})
export class SavingListComponent extends BaseResourceList<Saving> implements OnInit {

  public amountFilter = new SavingAmountFilter('amount');
  public dateSorter = new SavingDateSorter('date');
  public realTotalByType: TotalAmount[] = [];
  public prevTotalByType: TotalAmount[] = [];
  public realTotal: number;
  public prevTotal: number;

  constructor(
    protected injector: Injector,
    protected savingService: SavingService,
  ) {
    super(injector, savingService);
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

  protected onInitSubscribe(): void {
    this.buildRealTotal();
    this.buildPrevTotal();
  }

  protected buildRealTotal(): void {
    this.realTotalByType = [];
    this.realTotal = 0;
    this.sumByTypeAndSimulationValue(this.realTotalByType, false);
    this.realTotal = this.realTotalByType.reduce( (val, entry) => val + +entry.amount, 0 );
  }

  protected buildPrevTotal(): void {
    this.prevTotalByType = [];
    this.sumByTypeAndSimulationValue(this.prevTotalByType, true);
    this.prevTotal = this.prevTotalByType.reduce( (val, entry) => val + +entry.amount, 0 );
  }

  protected sumByTypeAndSimulationValue(totalByType: Array<TotalAmount>, simValue: boolean) {
    const sum = {};

    this.resources.filter(resource => resource.simulation === simValue)
      .map(resource => {
        return { type: this.getTypeText(resource.type), amount: +resource.amount };
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

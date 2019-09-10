import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Simulation extends BaseResourceModel {
  constructor(
    public id?: number,
    public composition?: string,
    public total?: string,
    public entry?: string,
    public entryPct?: string,
    public funding?: string,
    public fundingPct?: string,
    public renovation?: string,
    public installment?: string,
    public fundFees?: boolean,
    public composeIncome?: boolean,
    public interest?: string,
    public interestAM?: string,
    public cet?: string,
    public cesh?: string,
    public term?: string,
    public simDate?: string
    ) {
    super();
  }

  get fundFeesText(): string {
      return this.fundFees ? 'Sim' : 'Não';
  }

  get composeIncomeText(): string {
      return this.composeIncome ? 'Sim' : 'Não';
  }

  static fromJson(jsonData: any): Simulation {
      return Object.assign(new Simulation(), jsonData);
  }
}

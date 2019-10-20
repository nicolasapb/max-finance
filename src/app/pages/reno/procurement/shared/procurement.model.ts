import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Procurement extends BaseResourceModel {
  constructor(
    public id?: number,
    public product?: string,
    public amount?: string,
    public link?: string,
    public img?: string) {
    super();
  }

  static fromJson(jsonData: any): Procurement {
    return Object.assign(new Procurement(), jsonData);
  }
}

import { OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { BaseResourceService } from '../../services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource.model';

export abstract class BaseResourceList<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];
  public imaskAmountConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '.',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };
  public imaskPercentConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '.',
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ',',
    min: 0,
    max: 101
  };
  public imaskIntegerConfig = {
    mask: Number,
    scale: 0,
    thousandsSeparator: '.',
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ',',
    min: 0,
    max: 101
  };

  constructor(protected resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll()
      .subscribe({
          next: resources => {
            this.resources =  resources;
            this.onInitSubscribe(); // method provided to be used on inheriting components so the subscribe callback can be acessed
          },
          error: error => this.actionsForError('erro ao carregar a lista', error)
      });
  }

  deleteResource(resource: T): void {
    this.resourceService.delete(resource.id)
      .subscribe({
        next: _ => {
          this.resources = this.resources.filter(element => element !== resource );
          this.actionsForSuccess('item eliminado com sucesso');
        },
        error: error => this.actionsForError(`erro ao deletar o item: ${resource.id}`, error)
      });
  }

  protected actionsForSuccess(message: string): void {
    alert(message);
    // this.ngOnInit();
  }

  protected actionsForError(message: string, error: any): void {
    alert(message);
    console.error(error);
  }

  protected onInitSubscribe(): void {}

}
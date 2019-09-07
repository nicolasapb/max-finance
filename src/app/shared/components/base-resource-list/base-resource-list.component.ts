import { OnInit, ViewChild, AfterViewInit, Injector } from '@angular/core';

import { BaseResourceService } from '../../services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource.model';
import { ActivatedRoute, Router } from '@angular/router';

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

  protected route: ActivatedRoute;
  protected router: Router;

  constructor(
    protected injector: Injector,
    protected resourceService: BaseResourceService<T>
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
  }

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

  editResource(resource: T): void {
    const p = this.route.snapshot.url.length - 1;
    const i = this.route.snapshot.url.length - 1;
    const parentComponentPath: string = this.route.snapshot.parent.url[p].path;
    const baseComponentPath: string = this.route.snapshot.url[i].path;
    this.router.navigateByUrl(parentComponentPath, {skipLocationChange: true})
      .then(
        () => this.router.navigate([parentComponentPath, baseComponentPath, resource.id, 'edit'])
      );
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

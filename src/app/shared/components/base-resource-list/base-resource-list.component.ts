import { OnInit, ViewChild, AfterViewInit, Injector, ElementRef, Renderer2 } from '@angular/core';

import { BaseResourceService } from '../../services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/core/components/toast/toast.service';
import { ToastType } from 'src/app/core/components/toast/toast-config';

export abstract class BaseResourceList<T extends BaseResourceModel> implements OnInit {

  // @ViewChild(HTMLElement, {static: true}) acceptDelete: any;

  public resources: T[] = [];
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
  public modalDeleteItemOpen = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected resourceToDelete: T;
  protected toastService: ToastService;

  constructor(
    protected injector: Injector,
    protected resourceService: BaseResourceService<T>
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.toastService = this.injector.get(ToastService);
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

  editResource(resource: T): void {
    const parentComponentPath: string = this.route.snapshot.parent.url[0].path;
    const baseComponentPath: string = this.route.snapshot.url[0].path;
    this.router.navigateByUrl(parentComponentPath, {skipLocationChange: true})
      .then(
        () => this.router.navigate([parentComponentPath, baseComponentPath, resource.id, 'edit'])
      );
  }

  showResource(resource: T): void {
    const parentComponentPath: string = this.route.snapshot.parent.url[0].path;
    const baseComponentPath: string = this.route.snapshot.url[0].path;
    this.router.navigateByUrl(parentComponentPath, {skipLocationChange: true})
      .then(
        () => this.router.navigate([parentComponentPath, baseComponentPath, resource.id, 'show'])
      );
  }

  onCancelModal(): void {
    this.modalDeleteItemOpen = false;
  }

  onAcceptModal(): void {
    this.modalDeleteItemOpen = false;
    this.deleteResource(this.resourceToDelete);
  }

  confirmToDelete(resource: T): void {
    this.modalDeleteItemOpen = true;
    this.resourceToDelete = resource;
  }

  deleteResource(resource: T): void {
    this.resourceService.delete(resource.id)
      .subscribe({
        next: _ => {
          this.resources = this.resources.filter(element => element !== resource );
          this.actionsForSuccess('item eliminado com sucesso');
          this.resourceToDelete = undefined;
        },
        error: error => {
          this.actionsForError(`erro ao deletar o item: ${resource.id}`, error);
          this.resourceToDelete = undefined;
        }
      });
  }

  protected showToast(text: string, type: ToastType): void {
    this.toastService.show({ text, type});
  }

  protected actionsForSuccess(message: string): void {
    this.showToast(message, 'success');
  }

  protected actionsForError(message: string, error: any): void {
    this.showToast(message, 'danger');
    console.error(error);
  }

  protected onInitSubscribe(): void {}

}

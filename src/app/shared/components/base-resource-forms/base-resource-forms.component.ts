import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

import { switchMap, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ToastService } from 'src/app/core/components/toast/toast.service';
import { ToastType } from 'src/app/core/components/toast/toast-config';

export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  public currencAction: string;
  public resourceForm: FormGroup;
  public pageTitle: string;
  public serverErrorMessages: string[] = null;
  public submittingForm = false;
  public imaskAmountConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '.',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ',',
    max: 999999
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
  public imaskCNPJ = {
    mask: '00.000.000/0000-00'
  };
  public imaskAccount = {
    mask: '0000/0000000000'
  };
  public dateMask = {
    mask: Date,
    pattern: 'd/`m/`Y',
    format: (date) =>  {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (day < 10) { day = '0' + day; }
      if (month < 10) { month = '0' + month; }

      return [day, month, year].join('/');
    },
    parse: (str) => {
      const ddMMyyyy = str.split('/');
      return new Date(ddMMyyyy[2], ddMMyyyy[1] - 1, ddMMyyyy[0]);
    },
    autofix: true,
    overwrite: true
  };

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected location: Location;
  protected toastService: ToastService;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
      this.route = this.injector.get(ActivatedRoute);
      this.router = this.injector.get(Router);
      this.location = this.injector.get(Location);
      this.formBuilder = this.injector.get(FormBuilder);
      this.toastService = this.injector.get(ToastService);
  }

  ngOnInit() {
    this.setCurrentaction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
    if (this.currencAction === 'show') {
      this.submittingForm = true;
    }
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currencAction === 'new') {
      this.createResource();
    } else {
      this.updateResource();
    }
  }

  onCancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  // PROTECTED METHODS

  protected setCurrentaction(): void {
    const i = this.route.snapshot.url.length - 1;
    switch (this.route.snapshot.url[i].path) {
      case 'new':
        this.currencAction = 'new';
        break;
      case 'edit':
        this.currencAction = 'edit';
        break;
      case 'show':
        this.currencAction = 'show';
        break;
      default:
        this.currencAction = 'edit';
        break;
    }
    // this.route.snapshot.url[i].path === 'new' ? this.currencAction = 'new' : this.currencAction = 'edit';
  }

  protected loadResource(): void {
    if (this.currencAction === 'edit' || this.currencAction === 'show') {
      this.route.paramMap
        .pipe(
          switchMap(params => this.resourceService.getById(+params.get('id')))
        )
        .subscribe({
          next: resource => {
            this.resource = resource;
            this.resourceForm.patchValue(this.resource);
          },
          error: _ => this.showToast('Ocorreu um erro no servidor', 'danger')
        });
    }
  }

  protected setPageTitle(): void {
    if (this.currencAction === 'new') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return 'Novo';
  }

  protected editionPageTitle(): string {
    return 'Edição';
  }

  protected createResource(): void {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    this.resourceService.create(resource)
      .subscribe({
        next: newResource => this.actionsForSuccess(newResource, 'Item criado com sucesso'),
        error: error => this.actionsForError(error)
      });
  }

  protected updateResource(): void {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.update(resource)
      .subscribe({
        next: newResource => this.actionsForSuccess(newResource, 'Item atualizado com sucesso'),
        error: error => this.actionsForError(error)
      });
  }

  protected actionsForSuccess(resource: T, message: string): void {
    this.showToast(message, 'success');
    this.navigateToDisplay(resource);
  }

  protected navigateToDisplay(resource: T): void {
    const parentComponentPath: string = this.route.snapshot.parent.url[0].path;
    const baseComponentPath: string = this.route.snapshot.url[0].path;
    this.router.navigate([parentComponentPath, baseComponentPath]);
    // this.router.navigateByUrl(parentComponentPath, {skipLocationChange: true})
    //   .then(
    //     () => this.router.navigate([parentComponentPath, baseComponentPath, resource.id, 'show'])
    //   );
  }

  protected actionsForError(error: any): void {
    this.submittingForm = false;
    this.showToast('Algo deu errado', 'danger');
    if (error.stauts === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor, tente  mais tarde'];
    }
  }

  protected showToast(text: string, type: ToastType): void {
    this.toastService.show({ text, type});
  }

  protected abstract buildResourceForm(): void;

}

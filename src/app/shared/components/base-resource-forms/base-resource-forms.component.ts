import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

import { switchMap, tap } from 'rxjs/operators';

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

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
      this.route = this.injector.get(ActivatedRoute);
      this.router = this.injector.get(Router);
      this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit() {
    this.setCurrentaction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currencAction === 'new') {
      this.createResource();
    } else {
      this.updateResource();
    }
  }

  // PROTECTED METHODS

  protected setCurrentaction(): void {
    const i = this.route.snapshot.url.length - 1;
    this.route.snapshot.url[i].path === 'new' ? this.currencAction = 'new' : this.currencAction = 'edit';
  }

  protected loadResource(): void {
    if (this.currencAction === 'edit') {
      this.route.paramMap
        .pipe(
          switchMap(params => this.resourceService.getById(+params.get('id')))
        )
        .subscribe({
          next: resource => {
            this.resource = resource;
            this.resourceForm.patchValue(this.resource);
          },
          error: _ => alert('Ocorreu um erro no servidor')
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
        next: newResource => this.actionsForSuccess(newResource),
        error: error => this.actionsForError(error)
      });
  }

  protected updateResource(): void {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.update(resource)
      .subscribe({
        next: newResource => this.actionsForSuccess(newResource),
        error: error => this.actionsForError(error)
      });
  }

  protected actionsForSuccess(resource: T): void {
    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

    this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true})
      .then(
        () => this.router.navigate([baseComponentPath, resource.id, 'edit'])
      );
  }

  protected actionsForError(error: any): void {
    this.submittingForm = false;

    if (error.stauts === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor, tente  mais tarde'];
    }
  }

  protected abstract buildResourceForm(): void;

}

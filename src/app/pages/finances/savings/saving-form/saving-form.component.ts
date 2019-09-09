import { Component, OnInit, Injector } from '@angular/core';
import { Saving } from '../shared/saving.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-forms/base-resource-forms.component';
import { SavingService } from '../shared/saving.service';
import { Validators } from '@angular/forms';
import { stringDateValidator } from 'src/app/shared/validators/string-date.validator';

@Component({
  selector: 'app-saving-form',
  templateUrl: './saving-form.component.html',
  styleUrls: ['./saving-form.component.css']
})
export class SavingFormComponent extends BaseResourceFormComponent<Saving> implements OnInit {

  public types = [];

  constructor(
    protected injector: Injector,
    protected savingService: SavingService
  ) {
    super(injector, new Saving(), savingService, Saving.fromJson);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.types = this.typeOptions;
  }

   get typeOptions(): Array<any> {
    return Object.entries(Saving.types)
      .map(([value, text]) => {
        return { text, value };
      });
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      type: ['PP', [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required, stringDateValidator]],
      simulation: [false, [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'Nova Economia';
  }

  protected editionPageTitle(): string {
    const categoryId = this.resource.id || '';

    return `Economia: ${categoryId}`;
  }

}

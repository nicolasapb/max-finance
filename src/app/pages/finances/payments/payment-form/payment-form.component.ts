import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-forms/base-resource-forms.component';
import { Payment } from '../shared/payment.model';
import { PaymentService } from '../shared/payment.service';
import { Validators } from '@angular/forms';
import { stringDateValidator } from 'src/app/shared/validators/string-date.validator';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent extends BaseResourceFormComponent<Payment> implements OnInit {

  public types = [];

  constructor(
    protected injector: Injector,
    protected paymentService: PaymentService
  ) {
    super(injector, new Payment(), paymentService, Payment.fromJson);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.types = this.typeOptions;
  }

   get typeOptions(): Array<any> {
    return Object.entries(Payment.types)
      .map(([value, text]) => {
        return { text, value };
      });
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      recipient: [null, [Validators.required, Validators.minLength(2)]],
      dueDate: [null, [Validators.required, stringDateValidator]],
      amount: [null, [Validators.required]],
      payDate: [null, [Validators.required, stringDateValidator]],
      payAmount: [null, [Validators.required]],
      auth: [null, [Validators.required, Validators.minLength(22), Validators.maxLength(25)]],
      account: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(15)]],
      cnpj: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(18)]],
      paid: [true, [Validators.required]],
      type: ['1', [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'Novo pagamento';
  }

  protected editionPageTitle(): string {
    const categoryId = this.resource.id || '';

    return `Pagamento: ${categoryId}`;
  }

}

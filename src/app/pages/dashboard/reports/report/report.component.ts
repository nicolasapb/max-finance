import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/pages/finances/payments/shared/payment.service';
import { SavingService } from 'src/app/pages/finances/savings/shared/saving.service';
import { Payment } from 'src/app/pages/finances/payments/shared/payment.model';
import { Saving } from 'src/app/pages/finances/savings/shared/saving.model';
import { ToastService } from 'src/app/core/components/toast';
import { InstallmentProgress } from '../installment-progress/installment-progress.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public entryValue: number;
  public singleValue: number;
  public monthlyValue: number;

  public entryContract = 60000;
  public singleContract = 25500;
  public monthlyContract = 32500;

  public payments: Payment[];
  public savings: Saving[];
  public monthlyInstallment: InstallmentProgress[] = [];
  public singleInstallment: InstallmentProgress[] = [];

  constructor(
    protected paymentService: PaymentService,
    protected savingService: SavingService,
    protected toastService: ToastService
  ) { }

  ngOnInit() {
    this.getPayments();
    this.getSavings();
  }

  protected getPayments(): void {
    this.paymentService.getAll().subscribe({
      next: payments => this.processAfterPaymentServiceReturns(payments),
      error: error => this.handleError(error)
    });
  }

  protected getSavings(): void {
    this.savingService.getAll().subscribe({
      next: savings => this.processAfterSavingsServiceReturns(savings),
      error: error => this.handleError(error)
    });
  }

  protected processAfterPaymentServiceReturns(payments: Payment[]): void {
    this.payments = payments;
    this.entryValue = this.calculatePaymentPct('0', this.entryContract);
    this.monthlyValue = this.calculatePaymentPct('1', this.monthlyContract);
    this.singleValue = this.calculatePaymentPct('2', this.singleContract);

    const target = 32500.00;
    let total = 0;
    total = payments.filter( payment => payment.type === '1' )
      .reduce( (sum, payment) => sum + +payment.amount, 0);
    const needs = (target - total) < 0 ? 0 : target - total ;
    const needsPct = 100 - this.monthlyValue;
    const totalPct = this.monthlyValue;

    this.monthlyInstallment.push({
      total,
      target,
      needs,
      needsPct,
      totalPct
    });

  }

  protected calculatePaymentPct(type: string, contractValue: number): number {
    const entryAmount = this.payments.filter( payment => payment.type === type)
      .reduce( (total, payment) => total + +payment.amount, 0);

    let value = entryAmount / contractValue;

    if (value > 1) {
      value = 1;
    }

    return value = value * 100;
  }

  protected processAfterSavingsServiceReturns(savings: Saving[]): void {
    this.savings = savings;

    const target = 25500.00;
    const total = this.savings.filter( saving => saving.type === 'PP' && saving.simulation === false )
      .reduce( (sum, saving) => sum + +saving.amount, 0);
    const needs = (target - total) < 0 ? 0 : target - total ;
    const needsPct = (needs / total) * 100;
    const totalPct = 100 - needsPct;

    this.singleInstallment.push({
      total,
      target,
      needs,
      needsPct,
      totalPct
    });

  }

  protected handleError(error: any): void {
    this.toastService.show({ text: 'Algo deu errado', type: 'danger'});
    console.error(error);
  }

}

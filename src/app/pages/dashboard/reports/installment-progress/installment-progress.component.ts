import { Component, OnInit, Input } from '@angular/core';

export interface InstallmentProgress {
  total: number;
  needs: number;
  totalPct: number;
  needsPct: number;
  target: number;
}

@Component({
  selector: 'app-installment-progress',
  templateUrl: './installment-progress.component.html',
  styleUrls: ['./installment-progress.component.css']
})
export class InstallmentProgressComponent implements OnInit {

  public cols = ['total', 'falta', 'total %', 'falta %', 'meta'];
  @Input() installment: InstallmentProgress[];
  @Input() title: string;
  @Input() route: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {
  }

  setColor(value: number): boolean {
    return +value === 100 ? true : false;
  }

}

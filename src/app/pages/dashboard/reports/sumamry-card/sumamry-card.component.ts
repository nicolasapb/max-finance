import { Component, OnInit } from '@angular/core';

interface Summary {
  type: string;
  qty: number;
  amount: number;
  total: number;
  initialDate: Date;
}

@Component({
  selector: 'app-sumamry-card',
  templateUrl: './sumamry-card.component.html',
  styleUrls: ['./sumamry-card.component.css']
})
export class SumamryCardComponent implements OnInit {

  public cols = ['Tipo', 'Quantidade', 'Valor', 'Total', 'Data inicial'];
  public summary: Summary[] = [
    {type: 'Entrada',       qty: 1,  amount: 60000.00,  total: 60000.00,  initialDate: new Date(2019, 1, 11)},
    {type: 'Mensais',       qty: 13, amount: 2500.00,   total: 32500.00,  initialDate: new Date(2019, 2, 15)},
    {type: 'Única',         qty: 1,  amount: 25500.00,  total: 25500.00,  initialDate: new Date(2019, 11, 15)},
    {type: 'Financiamento', qty: 1,  amount: 391881.00, total: 391881.00, initialDate: new Date(2020, 3, 15)},
    {type: 'Única',         qty: 1,  amount: 500.00,    total: 500.00,    initialDate: new Date(2022, 2, 15)},
  ];

  constructor() { }

  ngOnInit() {
  }

}

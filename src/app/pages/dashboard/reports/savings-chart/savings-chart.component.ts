import { Component, OnInit } from '@angular/core';
import { SavingService } from 'src/app/pages/finances/savings/shared/saving.service';
import { Saving } from 'src/app/pages/finances/savings/shared/saving.model';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-savings-chart',
  templateUrl: './savings-chart.component.html',
  styleUrls: ['./savings-chart.component.css']
})
export class SavingsChartComponent implements OnInit {

    // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 2,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,85,0,1)',
        'rgba(0,148,211,1)',
        'rgba(0,101,171,1)',
        'rgba(255,179,143,1)',
        'rgba(0,61,121,1)',
        'rgba(166,216,231,1)',
        'rgba(133,200,26,1)'
      ],
    },
  ];
  constructor(
    protected savingService: SavingService
  ) { }


  ngOnInit() {
    this.savingService.getAll().subscribe({
      next: savings => {
        const sum = {};

        savings.filter( saving => !saving.simulation )
        .map(saving => {
          return { type: this.getTypeText(saving.type), amount: +saving.amount };
        })
        .forEach(entry => {
          if (!sum[entry.type]) {
            sum[entry.type] = 0;
          }
          sum[entry.type] += +entry.amount;
        });

        Object.keys(sum).forEach(key => {
          if (sum.hasOwnProperty(key)) {
            this.pieChartLabels.push(key);
            this.pieChartData.push(sum[key]);
            // this.pieChartColors[0].backgroundColor.push(this.dynamicColors());
          }
        });
      }
    });
  }

   get typeOptions(): Array<any> {
    return Object.entries(Saving.types)
      .map(([value, text]) => {
        return { text, value };
      });
  }

  getTypeText(type: string): string {
    const found = this.typeOptions.find( check => check.value === type);
    return found.text;
  }

  dynamicColors(): string {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.65)`;
 }
}

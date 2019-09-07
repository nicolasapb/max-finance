import { Component, OnInit } from '@angular/core';
import { ClrDatagridFilterInterface } from '@clr/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-filter',
  template: `
      <clr-date-container>
        <input type="date" [(clrDate)]="date">
      </clr-date-container>
  `,
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements ClrDatagridFilterInterface<Date> {


  public date: Date;
  public changes: Observable<Date>;
  constructor() { }

  isActive(): boolean {
    throw new Error('Method not implemented.');
  }
  accepts(date: Date): boolean {
    console.log(date);
    return true;
  }

}

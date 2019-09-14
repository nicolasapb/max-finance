import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css']
})
export class ProgressBarsComponent implements OnInit {

  @Input() entryValue: number;
  @Input() singleValue: number;
  @Input() monthlyValue: number;

  constructor() { }

  ngOnInit() {
  }

  setColor(value: number): string {
    return +value === 100 ? 'primary' : 'warn';
  }

}

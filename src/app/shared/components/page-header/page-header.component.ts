import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent  {

  @Input() pageTitle: string;
  @Input() spinner = true;
  @Input() spinnerCondition: boolean;
  constructor() { }

}
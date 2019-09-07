import { Component } from '@angular/core';
import { ClrCommonStringsService } from '@clr/angular';
import { ptBRLocale } from 'src/locale/ptBR.locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'max-fin';
  constructor(commonStrings: ClrCommonStringsService) {
    commonStrings.localize(ptBRLocale);
  }
}

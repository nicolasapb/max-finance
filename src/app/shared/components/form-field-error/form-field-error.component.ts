import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `
  <div  class="clr-error clr-subtext clr-subtext">
    <clr-control-error>{{errorMessage}}</clr-control-error>
  </div>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {


  // tslint:disable-next-line: no-input-rename
  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if ( this.mustShowErrorMessage() ) {
      return this.getErrorMessage();
    } else {
      return null;
    }
  }

  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {
    if (this.formControl.errors.required) {
      return 'Campo obrigatório!';

    } else if (this.formControl.errors.email) {
      return 'email inválido!';

    } else if (this.formControl.errors.minlength) {
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `deve ter no mínimo ${requiredLength} caracteres!`;

    } else if (this.formControl.errors.maxlength) {
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `deve ter no máximo ${requiredLength} caracteres!`;

    } else if (this.formControl.errors.stringDate) {
      return `data inválida!`;

    } else {
      return null;
    }
  }

}

import { AbstractControl } from '@angular/forms';

export function stringDateValidator(control: AbstractControl) {
  if (control.value) {
    if (!isDateValid(control.value)) {
        return {stringDate: true};
    }
    return null;
  }
  return null;
}

function isDateValid(dateStr: string): boolean {
  const parts = dateStr.split('/');
  const y = +parts[2];
  const m = +parts[1] - 1;
  const d = +parts[0];
  const date = new Date(y, m, d);
  return date instanceof Date && !isNaN(date.getDate()) && (date.getMonth() === m);
}

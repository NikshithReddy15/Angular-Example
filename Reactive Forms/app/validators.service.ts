import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  validatePassword(): ValidatorFn {
    return (control: AbstractControl) => {
      const regExpTestValue = /[\* | \@ | \# | \& | \% | \$ | \^]/.test(control.value) && /[0-9]/.test(control.value) && /[A-Z]/.test(control.value);
      return regExpTestValue ? null : {'validPassword': true};
    }
  }

}

export function validatePassword(): ValidatorFn {
  return (control: AbstractControl) => {
    const regExpTestValue = /[\* | \@ | \# | \& | \% | \$ | \^]/.test(control.value) && /[0-9]/.test(control.value) && /[A-Z]/.test(control.value);
    return regExpTestValue ? null : {'validPassword': true};
  }
}
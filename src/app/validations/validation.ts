import { FormControl } from '@angular/forms';
export function validateCounterRange(maxValue:number, minValue:number) {
  return (c: FormControl) => {
    const isValid = c.value <= +maxValue && c.value >= +minValue;
    return !isValid && {
      invalid: true
    };
  };
}

export function validateCounterNumber(c: FormControl) {
    const err = {
      rangeError: {
        given: c.value,
        max: 10,
        min: 1
      }
    };
    return (c.value > 10 || c.value < 1) ? err : null;
  }

import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export function emailValidation(
  control: AbstractControl,
): ValidationErrors | null {
  return Validators.email(control)
    ? { invalidEmail: "Enter a valid email address." }
    : null;
}

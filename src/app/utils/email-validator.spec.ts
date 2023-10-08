import { FormControl } from "@angular/forms";

import { emailValidation } from "./email-validator.util";

describe("Email validator", () => {
  let formControl: FormControl;
  const errorMessage = { invalidEmail: "Enter a valid email address." };

  beforeEach(() => {
    formControl = new FormControl("");
  });

  it("should FAIL with 'alma' as an email address", () => {
    formControl.setValue("alma");
    expect(emailValidation(formControl)).toEqual(errorMessage);
  });

  it("should FAIL with 'korte.' as an email address", () => {
    formControl.setValue("korte.");
    expect(emailValidation(formControl)).toEqual(errorMessage);
  });

  it("should FAIL with 'email.hu' as an email address", () => {
    formControl.setValue("email.hu");
    expect(emailValidation(formControl)).toEqual(errorMessage);
  });

  it("should PASS with 'email@hu' as an email address", () => {
    formControl.setValue("email@hu");
    expect(emailValidation(formControl)).toEqual(null);
  });

  it("should FAIL with 'email@gmail.' as an email address", () => {
    formControl.setValue("email@gmail.");
    expect(emailValidation(formControl)).toEqual(errorMessage);
  });

  it("should FAIL with 'email@gmail.com' as an email address", () => {
    formControl.setValue("email@gmail.com");
    expect(emailValidation(formControl)).toEqual(null);
  });
});

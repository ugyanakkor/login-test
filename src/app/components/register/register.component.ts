import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RegisterForm } from "../../interfaces/form.interface";
import { FormWrapperComponent } from "../../reusable-components/form-wrapper/form-wrapper.component";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { UsersService } from "../../services/users/users.service";
import { emailValidation } from "../../utils/email-validator.util";
import { RegisterService } from "./register.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormWrapperComponent,
  ],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  public registerFormGroup = new FormGroup<RegisterForm>({
    firstName: new FormControl("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    lastName: new FormControl("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl("", {
      nonNullable: true,
      validators: [emailValidation, Validators.required],
    }),
    password: new FormControl("", {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly registerService: RegisterService,
    private readonly usersService: UsersService,
  ) {}

  public register(): void {
    const isUserRegistered = this.registerService.isUserRegistered(
      this.registerFormGroup.controls.email.value,
    );

    if (!isUserRegistered) {
      const users = this.usersService.users.getValue();
      this.localStorage.setLocalStorage("users", [
        ...users,
        this.registerFormGroup.value,
      ]);
    } else {
      this.registerFormGroup.controls.email.setErrors({
        registeredEmail: true,
      });
    }
  }
}

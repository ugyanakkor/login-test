import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginForm } from "../../interfaces/form.interface";
import { FormWrapperComponent } from "../../reusable-components/form-wrapper/form-wrapper.component";
import { UsersService } from "../../services/users/users.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormWrapperComponent,
    ReactiveFormsModule,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public loginFormGroup = new FormGroup<LoginForm>({
    email: new FormControl("", { nonNullable: true }),
    password: new FormControl("", { nonNullable: true }),
  });

  constructor(private readonly usersService: UsersService) {
    this.usersService.setUsers();
  }

  public login(): void {
    for (const user of this.usersService.users.getValue()) {
      if (
        user.email === this.loginFormGroup.controls.email.value &&
        user.password === this.loginFormGroup.controls.password.value
      ) {
        console.log("sikeres belépés");
      }
    }
    console.log(this.loginFormGroup.value);
  }
}

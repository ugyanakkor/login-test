import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { LoginForm } from "../../interfaces/form.interface";
import { FormWrapperComponent } from "../../reusable-components/form-wrapper/form-wrapper.component";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
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

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
    private readonly localStorage: LocalStorageService,
  ) {
    this.usersService.setUsers();

    const loggedIn = this.localStorage.getLocalStorage("userLoggedIn");
    if (loggedIn) this.router.navigateByUrl("/user-page");
  }

  public login(): void {
    const loginControls = this.loginFormGroup.controls;
    for (const user of this.usersService.users.getValue()) {
      if (
        user.email === loginControls.email.value &&
        user.password === loginControls.password.value
      ) {
        const userName = `${user.firstName + " " + user.lastName}`;
        this.localStorage.setLocalStorage("userName", userName);
        this.usersService.userLoggedIn(true);
      } else {
        this.loginFormGroup.setErrors({ invalidCredentials: true });
      }
    }
  }
}

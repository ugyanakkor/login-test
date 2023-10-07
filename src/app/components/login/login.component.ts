import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FormWrapperComponent } from "../../reusable-components/form-wrapper/form-wrapper.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterModule, FormWrapperComponent],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}

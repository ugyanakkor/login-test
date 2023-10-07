import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FormWrapperComponent } from "../../reusable-components/form-wrapper/form-wrapper.component";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, RouterModule, FormWrapperComponent],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}

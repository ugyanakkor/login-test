import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-form-wrapper",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./form-wrapper.component.html",
  styleUrls: ["./form-wrapper.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWrapperComponent {}

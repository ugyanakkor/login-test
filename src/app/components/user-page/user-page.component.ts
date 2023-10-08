import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";

import { UsersService } from "../../services/users/users.service";

@Component({
  selector: "app-user-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent {
  public userName = this.usersService.userName;

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
  ) {}

  public logout(): void {
    this.usersService.userLoggedIn(false);
    this.router.navigateByUrl("/login");
  }
}

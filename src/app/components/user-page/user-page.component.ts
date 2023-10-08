import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";

import { UsersService } from "../../services/users/users.service";
import { ImageListComponent } from "./image-list/image-list.component";
import { ImageUploadComponent } from "./image-upload/image-upload.component";

@Component({
  selector: "app-user-page",
  standalone: true,
  imports: [CommonModule, ImageUploadComponent, ImageListComponent],
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

import { Injectable } from "@angular/core";

import { UsersService } from "../../services/users/users.service";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private readonly usersService: UsersService) {
    this.usersService.setUsers();
  }

  public isUserRegistered(email: string): boolean {
    let isUserExist = false;
    for (const user of this.usersService.users.getValue()) {
      if (user.email === email) {
        isUserExist = true;
      }
    }

    this.usersService.setUsers();

    return isUserExist;
  }
}

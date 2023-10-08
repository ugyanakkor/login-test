import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { User } from "../../interfaces/user.interface";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  public users = new BehaviorSubject<Array<User>>([]);

  constructor(private readonly localStorage: LocalStorageService) {}

  public setUsers(): void {
    this.users.next(this.localStorage.getLocalStorage("users"));
  }

  public userLoggedIn(loggedIn: boolean): void {
    this.localStorage.setLocalStorage("userLoggedIn", loggedIn);
  }
}

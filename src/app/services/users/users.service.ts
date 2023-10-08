import { Injectable } from "@angular/core";

import { BehaviorSubject, ReplaySubject } from "rxjs";

import { User } from "../../interfaces/user.interface";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  public users = new BehaviorSubject<Array<User>>([]);
  public userName = new ReplaySubject<string>(1);

  constructor(private readonly localStorage: LocalStorageService) {
    this.userName.next(this.localStorage.getLocalStorage("userName"));
  }

  public setUsers(): void {
    this.users.next(this.localStorage.getLocalStorage("users"));
  }

  public userLoggedIn(loggedIn: boolean): void {
    this.localStorage.setLocalStorage("userLoggedIn", loggedIn);
  }
}

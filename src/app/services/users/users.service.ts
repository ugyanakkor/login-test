import { Injectable } from "@angular/core";

import { BehaviorSubject, ReplaySubject, tap } from "rxjs";

import { User } from "../../interfaces/user.interface";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  public users = new BehaviorSubject<Array<User>>([]);
  public userName = new ReplaySubject<string>(1);

  constructor(private readonly localStorage: LocalStorageService) {
    this.userName.pipe(
      tap((userName) =>
        this.localStorage.setLocalStorage("userName", userName),
      ),
    );

    this.userName.next(this.localStorage.getLocalStorage("userName"));
  }

  public setUsers(): void {
    const users = this.localStorage.getLocalStorage("users") || [];
    this.users.next(users);
  }

  public userLoggedIn(loggedIn: boolean): void {
    this.localStorage.setLocalStorage("userLoggedIn", loggedIn);
  }
}

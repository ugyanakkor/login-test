import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { Observable, of } from "rxjs";

import { LocalStorageService } from "../../services/local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly localStorage: LocalStorageService,
  ) {}

  public canActivate(): Observable<boolean> {
    const loggedIn = this.localStorage.getLocalStorage("userLoggedIn");
    if (!loggedIn) this.router.navigateByUrl("/login");

    return of(loggedIn);
  }
}

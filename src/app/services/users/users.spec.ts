import { TestBed } from "@angular/core/testing";

import { user } from "../../mocks/user-object.mock";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let usersService: UsersService;
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, LocalStorageService],
    });
    usersService = TestBed.inject(UsersService);
    localStorageService = TestBed.inject(LocalStorageService);
    localStorage.removeItem("users");
  });

  it("should create UsersService", () => {
    expect(usersService).toBeInstanceOf(UsersService);
  });

  it("should set users", () => {
    localStorageService.setLocalStorage("users", user);
    usersService.setUsers();
    expect(usersService.users.getValue()).toEqual(user);
  });

  it("should set users with empty array", (done) => {
    expect(usersService.users.getValue()).toEqual([]);
    usersService.users.subscribe((users) => {
      expect(users).toEqual([]);
      done();
    });
  });

  it("should set users with user array", (done) => {
    expect(usersService.users.getValue()).toEqual([]);
    usersService.users.subscribe((users) => {
      expect(users).toEqual([user]);
      done();
    });
    usersService.users.next([user]);
  });

  it("should set notUsers and got null on users value", () => {
    localStorageService.setLocalStorage("notUsers", user);
    usersService.setUsers();
    expect(usersService.users.getValue()).toEqual(null);
    localStorage.removeItem("notUsers");
  });

  it("should set user logged in to true", () => {
    usersService.userLoggedIn(true);
    expect(localStorageService.getLocalStorage("userLoggedIn")).toEqual(true);
  });

  it("should set user logged in to false", () => {
    usersService.userLoggedIn(false);
    expect(localStorageService.getLocalStorage("userLoggedIn")).toEqual(false);
  });
});

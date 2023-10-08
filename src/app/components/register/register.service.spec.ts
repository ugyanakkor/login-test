import { TestBed } from "@angular/core/testing";

import { BehaviorSubject } from "rxjs";

import { User } from "../../interfaces/user.interface";
import { user } from "../../mocks/user-object.mock";
import { UsersService } from "../../services/users/users.service";
import { RegisterService } from "./register.service";

describe("RegisterService", () => {
  let registerService: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterService,
        {
          provide: UsersService,
          useValue: {
            users: new BehaviorSubject<Array<User>>([user]),
            setUsers: () => {},
          },
        },
      ],
    });
    registerService = TestBed.inject(RegisterService);
  });

  it("should create RegisterService", () => {
    expect(registerService).toBeInstanceOf(RegisterService);
  });

  it("should get user is NOT registered", () => {
    expect(registerService.isUserRegistered("almafa@gmail.com")).toEqual(false);
  });

  it("should get user IS registered", () => {
    expect(registerService.isUserRegistered("test@gmail.com")).toEqual(true);
  });
});

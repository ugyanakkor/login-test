import { ComponentFixture, TestBed } from "@angular/core/testing";
import {ActivatedRoute} from "@angular/router";

import {of} from "rxjs";

import {user} from "../../mocks/user-object.mock";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {UsersService} from "../../services/users/users.service";
import {LoginComponent} from "./login.component";

describe("LoginComponent", () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let usersService: UsersService;
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {params: of('')}
      },
        UsersService,
        LocalStorageService
      ]
    });

    localStorage.removeItem('userLoggedIn');

    fixture = TestBed.createComponent(LoginComponent);
    usersService = TestBed.inject(UsersService);
    localStorageService = TestBed.inject(LocalStorageService);
    component = fixture.componentInstance;
  });

  it("should create the login component", () => {
    expect(component).toBeInstanceOf(LoginComponent);
  });

  it("should login the user", () => {
   usersService.users.next([user]);
    component.loginFormGroup.controls.email.setValue('test@gmail.com');
    component.loginFormGroup.controls.password.setValue('alma');
    component.login();
    const userLoggedIn = localStorageService.getLocalStorage('userLoggedIn');
    expect(userLoggedIn).toEqual(true);
  });

  it("should NOT login the user", () => {
    usersService.users.next([user]);
    component.loginFormGroup.controls.email.setValue('test@gmail.com');
    component.loginFormGroup.controls.password.setValue('korte');
    component.login();
    expect(component.loginFormGroup.errors?.invalidCredentials).toEqual(true);
  });
});

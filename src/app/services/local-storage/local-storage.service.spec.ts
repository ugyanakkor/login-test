import { TestBed } from "@angular/core/testing";

import { user } from "../../mocks/user-object.mock";
import { LocalStorageService } from "./local-storage.service";

describe("LocalStorageService", () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LocalStorageService] });
    service = TestBed.inject(LocalStorageService);
    localStorage.removeItem("test");
  });

  it("should create LocalStorageService", () => {
    expect(service).toBeInstanceOf(LocalStorageService);
  });

  it("should set localstorage with test object", () => {
    service.setLocalStorage("test", user);
    const value = localStorage.getItem("test");
    expect(value ? JSON.parse(value) : null).toEqual(user);
  });

  it("should set localstorage with null", () => {
    service.setLocalStorage("test", null);
    const value = localStorage.getItem("test");
    expect(value ? JSON.parse(value) : null).toEqual(null);
  });

  it("should get localstorage with test object", () => {
    localStorage.setItem("test", JSON.stringify(user));
    expect(service.getLocalStorage("test")).toEqual(user);
  });

  it("should NOT get localstorage with test2 object", () => {
    localStorage.setItem("test", JSON.stringify(user));
    expect(service.getLocalStorage("test2")).not.toEqual(user);
  });
});

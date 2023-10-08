import { TestBed } from "@angular/core/testing";

import { LocalStorageService } from "./local-storage.service";

describe("LocalStorageService", () => {
  let service: LocalStorageService;
  const object = {
    firstname: "Barack",
    lastName: "Nemes",
    email: "test@gmail.com",
    password: "alma",
  };

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LocalStorageService] });
    service = TestBed.inject(LocalStorageService);
    localStorage.removeItem("test");
  });

  it("should create LocalStorageService", () => {
    expect(service).toBeInstanceOf(LocalStorageService);
  });

  it("should set localstorage with test object", () => {
    service.setLocalStorage("test", object);
    const value = localStorage.getItem("test");
    expect(value ? JSON.parse(value) : null).toEqual(object);
  });

  it("should set localstorage with null", () => {
    service.setLocalStorage("test", null);
    const value = localStorage.getItem("test");
    expect(value ? JSON.parse(value) : null).toEqual(null);
  });

  it("should get localstorage with test object", () => {
    localStorage.setItem("test", JSON.stringify(object));
    expect(service.getLocalStorage("test")).toEqual(object);
  });

  it("should NOT get localstorage with test2 object", () => {
    localStorage.setItem("test", JSON.stringify(object));
    expect(service.getLocalStorage("test2")).not.toEqual(object);
  });
});

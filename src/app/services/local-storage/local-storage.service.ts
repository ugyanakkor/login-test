import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  public setLocalStorage(keyName: string, object: unknown): void {
    localStorage.setItem(keyName, JSON.stringify(object));
  }

  public getLocalStorage(keyName: string) {
    const value = localStorage.getItem(keyName);
    return value ? JSON.parse(value) : null;
  }
}

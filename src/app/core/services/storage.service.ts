import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static store(key: string, value: {[key: string]: any}) {
    sessionStorage.setItem(`app-${key}`, JSON.stringify(value));
  }

  static retreive(key: string): {[key: string]: any} | null {
    const value = sessionStorage.getItem(`app-${key}`);
    return value ? JSON.parse(value) : null;
  }

  static clearAll() {
    sessionStorage.clear();
  }

  static clear(key: string) {
    sessionStorage.removeItem(`app-${key}`);
  }

}

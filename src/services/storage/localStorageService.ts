// src/services/storage/localStorageService.ts

const PREFIX = "myApp_";

export const localStorageService = {
  setItem(key: string, value: any): void {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },

  getItem<T>(key: string, defaultValue: T): T {
    const item = localStorage.getItem(PREFIX + key);
    if (item === null) return defaultValue;
    try {
      return JSON.parse(item);
    } catch {
      return defaultValue;
    }
  },

  removeItem(key: string): void {
    localStorage.removeItem(PREFIX + key);
  },

  clear(): void {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(PREFIX))
      .forEach((key) => localStorage.removeItem(key));
  },
};

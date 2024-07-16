// src/services/storage/sessionStorageService.ts

const PREFIX = "myApp_";

export const sessionStorageService = {
  setItem(key: string, value: any): void {
    sessionStorage.setItem(PREFIX + key, JSON.stringify(value));
  },

  getItem<T>(key: string, defaultValue: T): T {
    const item = sessionStorage.getItem(PREFIX + key);
    if (item === null) return defaultValue;
    try {
      return JSON.parse(item);
    } catch {
      return defaultValue;
    }
  },

  removeItem(key: string): void {
    sessionStorage.removeItem(PREFIX + key);
  },

  clear(): void {
    Object.keys(sessionStorage)
      .filter((key) => key.startsWith(PREFIX))
      .forEach((key) => sessionStorage.removeItem(key));
  },
};

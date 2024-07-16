// src/types/user.ts

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
}

export type UserCreateInput = Omit<User, "id" | "createdAt">;
export type UserUpdateInput = Partial<UserCreateInput>;

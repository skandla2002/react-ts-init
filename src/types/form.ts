// src/types/form.ts

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "date";
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface FormConfig {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
}

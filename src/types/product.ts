// src/types/product.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
}

export type ProductCreateInput = Omit<Product, "id">;
export type ProductUpdateInput = Partial<ProductCreateInput>;

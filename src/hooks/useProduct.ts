// src/hooks/useProduct.ts
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { fetchProductById } from "@/services/api/productApi";

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return { product, isLoading, error };
};

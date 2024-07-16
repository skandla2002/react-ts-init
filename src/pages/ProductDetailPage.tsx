// src/pages/ProductDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "@/hooks/useProduct";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading, error } = useProduct(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;

// src/pages/HomePage.tsx
import React from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductList from "@/components/ProductList";

const HomePage: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;

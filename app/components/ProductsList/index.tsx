import React from 'react';
import { ProductCard } from '../ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string; // Added description
  model: string;       // Added model
  company: string;     // Added company
  stock: number;       // Added stock
  // Add other product properties as needed
}

interface ProductsListProps {
  products: Product[];
  error: string | null;
}

export const ProductsList: React.FC<ProductsListProps> = ({ products = [], error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '1rem' }}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetching products during build time
export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const products: Product[] = await response.json(); // Type the response

    return {
      props: {
        products,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
        error: (error as Error).message || 'Failed to load products',
      },
    };
  }
}

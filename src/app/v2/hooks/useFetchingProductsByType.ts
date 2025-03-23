import { useState, useEffect } from 'react';

type ProductImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

type ProductType = {
  id: string;
  name: string;
  info: string;
  price: string;
  formattedPrice?: string;
  type: string;
  images: ProductImageType[];
};

export default function useFetchProductsByType(type: string) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        const allProducts = data.items || [];

        const filteredProducts = allProducts.filter(
          (product: ProductType) => product.type === type
        );

        const updatedProducts = filteredProducts.map((product: ProductType) => {
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(parseFloat(product.price));

          return {
            ...product,
            formattedPrice,
          };
        });

        setProducts(updatedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [type]);

  return { products, loading, error };
}

import { useState, useEffect } from 'react';

type ProductImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

export type ProductType = {
  id: string;
  name: string;
  info: string;
  price: string;
  formattedPrice?: string;
  type: string;
  images: ProductImageType[];
};

export default function useFetchProductByName(
  type: string,
  productName: string
) {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        const allProducts = data.items || [];

        // First filter by type, then find by name
        const filteredProducts = allProducts.filter(
          (product: ProductType) => product.type === type
        );

        const foundProduct = filteredProducts.find(
          (product: ProductType) => product.name === productName
        );

        if (!foundProduct) {
          throw new Error('Product not found');
        }

        // Format the price
        const formattedPrice = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(parseFloat(foundProduct.price));

        setProduct({
          ...foundProduct,
          formattedPrice,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product');
        setLoading(false);
      }
    };

    if (productName) {
      fetchProduct();
    }
  }, [type, productName]);

  return { product, loading, error };
}

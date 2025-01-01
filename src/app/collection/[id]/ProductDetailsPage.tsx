'use client';

import ProductDetails from './ProductDetails';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductDetailsType } from './ProductDetails';

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetailsType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data: { items: ProductDetailsType[] } = await response.json();

        const foundProduct = data.items.find((item) => item.id === id);

        if (foundProduct) {
          setProduct({
            ...foundProduct,
          });
        } else {
          console.error('Product not found!');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return <ProductDetails product={product} />;
}

export default ProductDetailsPage;

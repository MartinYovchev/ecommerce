'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useFetchProductsByType from '@/app/hooks/useFetchingProductsByType';
import Loading from '@/app/loading';
import styles from './FeatureProducts.module.scss';

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

export default function FeatureProducts() {
  const { products: menProducts, loading: menLoading } =
    useFetchProductsByType('men-shoes');
  const { products: womenProducts, loading: womenLoading } =
    useFetchProductsByType('women-shoes');
  const { products: kidProducts, loading: kidLoading } =
    useFetchProductsByType('kid-shoes');

  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const isLoading = menLoading || womenLoading || kidLoading;

  useEffect(() => {
    if (!isLoading) {
      const getRandomProducts = (products: ProductType[], count: number) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };

      const featured = [
        ...getRandomProducts(menProducts, 2),
        ...getRandomProducts(womenProducts, 2),
        ...getRandomProducts(kidProducts, 2),
      ];

      setFeaturedProducts(featured);
    }
  }, [menProducts, womenProducts, kidProducts, isLoading]);

  const getCategoryDisplayName = (type: string) => {
    switch (type) {
      case 'men-shoes':
        return 'Men';
      case 'women-shoes':
        return 'Women';
      case 'kid-shoes':
        return 'Kids';
      default:
        return type;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={styles.featuredSection}>
      <h2>Featured Products</h2>
      <div className={styles.featuredGrid}>
        {featuredProducts.map((product) => (
          <Link
            href={`/collection/${product.type}/${product.name}`}
            key={product.id}
            className={styles.productCard}
          >
            <div className={styles.imageContainer}>
              {product.images && product.images.length > 0 && (
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt || product.name}
                  width={400}
                  height={400}
                  className={styles.productImage}
                  priority={true}
                />
              )}
              <div className={styles.categoryBadge}>
                {getCategoryDisplayName(product.type)}
              </div>
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p className={styles.price}>{product.formattedPrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

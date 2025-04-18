'use client';

import useFetchProductsByType from '@/app/hooks/useFetchingProductsByType';
import Image from 'next/image';
import styles from '../Products.module.scss';
import Link from 'next/link';

export default function MenShoesPage() {
  const { products, loading, error } = useFetchProductsByType('men-shoes');

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Men Shoes</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link
              href={`/collection/men-shoes/${product.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className={styles.imageContainer}>
                {product.images[0] && (
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    width={300}
                    height={300}
                    className={styles.productImage}
                  />
                )}
              </div>
              <div className={styles.productInfo}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productPrice}>{product.formattedPrice}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import useFetchProductsByType from '@/app/hooks/useFetchingProductsByType';
import Image from 'next/image';
import styles from '../Products.module.scss';
import Link from 'next/link';
import ProductFilters from '../components/ProductFilters';
import Loading from '@/app/loading';

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export default function KidShoesPage() {
  const { products, loading, error } = useFetchProductsByType('kid-shoes');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
  };

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply filters
    if (filters.price) {
      const [min, max] = filters.price.map(Number);
      result = result.filter((product) => {
        const price = Number(product.price);
        return price >= min && price <= max;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return Number(a.price) - Number(b.price);
        case 'price-desc':
          return Number(b.price) - Number(a.price);
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return result;
  }, [products, sortBy, filters]);

  if (loading) return <Loading isLoading={true} />;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kids&apos; Shoes</h1>
      <div className={styles.mainContent}>
        <ProductFilters
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
        />
        <div className={styles.productsGrid}>
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Link
                href={`/collection/kid-shoes/${product.name}`}
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
                      priority
                    />
                  )}
                </div>
                <div className={styles.productInfo}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <p className={styles.productPrice}>
                    {product.formattedPrice}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

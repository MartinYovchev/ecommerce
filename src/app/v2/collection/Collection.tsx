'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Collection.module.scss';

// Define categories
const categories = [
  {
    id: 'men',
    name: "Men's Shoes",
    description:
      "Discover our collection of men's sneakers for style and performance.",
    image: '/collection/men-shoes.jpg',
    link: '/v2/products/men-shoes',
    featured: true,
  },
  {
    id: 'women',
    name: "Women's Shoes",
    description: "Explore our women's sneakers combining fashion and function.",
    image: '/collection/women-shoes.jpg',
    link: '/v2/products/women-shoes',
    featured: true,
  },
  {
    id: 'kids',
    name: "Kids' Shoes",
    description: 'Fun and durable sneakers designed for active kids.',
    image: '/collection/kid-shoes.jpg',
    link: '/v2/products/kid-shoes',
    featured: true,
  },
  {
    id: 'running',
    name: 'Running',
    description: 'High-performance running shoes for all terrains.',
    image: '/collection/running-shoes.jpg',
    link: '/v2/products/running-shoes',
    featured: false,
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description: 'Court-ready basketball shoes for optimal performance.',
    image: '/collection/basketball-shoes.jpg',
    link: '/v2/products/basketball-shoes',
    featured: false,
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Everyday casual sneakers for comfort and style.',
    image: '/collection/casual-shoes.jpg',
    link: '/v2/products/casual-shoes',
    featured: false,
  },
  {
    id: 'limited',
    name: 'Limited Edition',
    description: 'Exclusive, limited-run sneakers for collectors.',
    image: '/collection/limited-shoes.jpg',
    link: '/v2/products/limited-edition',
    featured: false,
  },
  {
    id: 'sale',
    name: 'On Sale',
    description: 'Premium sneakers at discounted prices.',
    image: '/collection/sale-shoes.jpg',
    link: '/v2/products/sale',
    featured: false,
  },
];

// Define brands
const brands = [
  { id: 'nike', name: 'Nike', logo: '/brands/nike.png' },
  { id: 'adidas', name: 'Adidas', logo: '/brands/adidas.png' },
  { id: 'newbalance', name: 'New Balance', logo: '/brands/newbalance.png' },
  { id: 'puma', name: 'Puma', logo: '/brands/puma.png' },
  { id: 'reebok', name: 'Reebok', logo: '/brands/reebok.png' },
  { id: 'converse', name: 'Converse', logo: '/brands/converse.png' },
];

export default function Collection() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filteredCategories =
    currentFilter === 'all'
      ? categories
      : categories.filter(
          (cat) =>
            cat.id === currentFilter ||
            (currentFilter === 'featured' && cat.featured)
        );

  return (
    <div className={styles.collectionContainer}>
      <div className={styles.hero}>
        <h1>Our Collections</h1>
        <p>Explore our wide range of sneakers for every style and occasion</p>
      </div>

      <section className={styles.filterSection}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${currentFilter === 'all' ? styles.active : ''}`}
            onClick={() => setCurrentFilter('all')}
          >
            All Collections
          </button>
          <button
            className={`${styles.filterButton} ${currentFilter === 'featured' ? styles.active : ''}`}
            onClick={() => setCurrentFilter('featured')}
          >
            Featured
          </button>
          <button
            className={`${styles.filterButton} ${currentFilter === 'men' ? styles.active : ''}`}
            onClick={() => setCurrentFilter('men')}
          >
            Men
          </button>
          <button
            className={`${styles.filterButton} ${currentFilter === 'women' ? styles.active : ''}`}
            onClick={() => setCurrentFilter('women')}
          >
            Women
          </button>
          <button
            className={`${styles.filterButton} ${currentFilter === 'kids' ? styles.active : ''}`}
            onClick={() => setCurrentFilter('kids')}
          >
            Kids
          </button>
        </div>
      </section>

      <section className={styles.categoriesGrid}>
        {filteredCategories.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <div className={styles.imageContainer}>
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={300}
                className={styles.categoryImage}
              />
              {category.featured && (
                <span className={styles.featuredBadge}>Featured</span>
              )}
            </div>
            <div className={styles.categoryInfo}>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <Link href={category.link} className={styles.exploreButton}>
                Explore Collection
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.brandsSection}>
        <h2>Shop by Brand</h2>
        <div className={styles.brandsGrid}>
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/v2/products/brands/${brand.id}`}
              className={styles.brandCard}
            >
              <div className={styles.brandLogoContainer}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={80}
                  className={styles.brandLogo}
                />
              </div>
              <p>{brand.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.featuredContent}>
          <h2>New Arrivals</h2>
          <p>Be the first to get your hands on our latest sneaker drops</p>
          <Link
            href="/v2/products/new-arrivals"
            className={styles.featuredButton}
          >
            Shop New Arrivals
          </Link>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <div className={styles.iconContainer}>
            <Image
              src="/icons/shipping.svg"
              alt="Free Shipping"
              width={40}
              height={40}
            />
          </div>
          <h3>Free Shipping</h3>
          <p>On all orders over $150</p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.iconContainer}>
            <Image
              src="/icons/return.svg"
              alt="Easy Returns"
              width={40}
              height={40}
            />
          </div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.iconContainer}>
            <Image
              src="/icons/secure.svg"
              alt="Secure Payment"
              width={40}
              height={40}
            />
          </div>
          <h3>Secure Payment</h3>
          <p>Your data is protected</p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.iconContainer}>
            <Image
              src="/icons/support.svg"
              alt="Customer Support"
              width={40}
              height={40}
            />
          </div>
          <h3>Customer Support</h3>
          <p>24/7 dedicated support</p>
        </div>
      </section>
    </div>
  );
}

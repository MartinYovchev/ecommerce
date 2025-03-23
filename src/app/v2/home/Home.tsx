'use client';

import Link from 'next/link';
import styles from './Home.module.scss';
import Image from 'next/image';
import useCarousel from '../hooks/useCarouselSlider';

const desktopImages = [
  '/v2/carousel1.jpg',
  '/v2/carousel2.jpg',
  '/v2/carousel3.jpg',
];
const mobileImages = [
  '/v2/mobileSlider1.jpg',
  '/v2/mobileSlider2.jpg',
  '/v2/mobileSlider3.jpg',
];

export default function Home() {
  const { currentIndex, images } = useCarousel(desktopImages, mobileImages);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.carousel}>
        <div
          className={styles.carouselImagesWrapper}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Carousel Image ${index + 1}`}
              className={styles.carouselImage}
              width={1000}
              height={1000}
            />
          ))}
        </div>

        <div className={styles.carouselDots}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>

      <header className={styles.hero}>
        <h1>Sneakers Shop</h1>
        <p>Discover the best products tailored just for you.</p>
        <Link href="/products" className={styles.shopButton}>
          Shop Now
        </Link>
      </header>

      <section className={styles.featuredSection}>
        <h2>Featured Products</h2>
        <div className={styles.featuredGrid}>
          <Link href="/products/1" className={styles.productCard}>
            Product 1
          </Link>
          <Link href="/products/2" className={styles.productCard}>
            Product 2
          </Link>
          <Link href="/products/3" className={styles.productCard}>
            Product 3
          </Link>
        </div>
      </section>

      <section className={styles.infoSection}>
        <h2>Why Shop With Us?</h2>
        <p>
          We offer quality products at the best prices, with reliable shipping
          and customer service.
        </p>
      </section>
    </div>
  );
}

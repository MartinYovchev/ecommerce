'use client';

import Link from 'next/link';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';
import FeatureProducts from './FeatureProducts/FeatureProducts';
import InfoSection from './InfoSection/InfoSection';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Carousel />

      <header className={styles.hero}>
        <h1>Sneakers Shop</h1>
        <p>Discover the best products tailored just for you.</p>
        <Link href="/products" className={styles.shopButton}>
          Shop Now
        </Link>
      </header>

      <FeatureProducts />

      <InfoSection />
    </div>
  );
}

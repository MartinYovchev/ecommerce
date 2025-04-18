'use client';

import Link from 'next/link';
import styles from './Home.module.scss';
import Carousel from './components/Carousel/Carousel';
import FeatureProducts from './components/FeatureProducts/FeatureProducts';
import InfoSection from './components/InfoSection/InfoSection';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Carousel />

      <header className={styles.hero}>
        <h1>Sneakers Shop</h1>
        <p>Discover the best products tailored just for you.</p>
        <Link href="/collection" className={styles.shopButton}>
          Shop Now
        </Link>
      </header>
      <FeatureProducts />
      <InfoSection />
    </div>
  );
}

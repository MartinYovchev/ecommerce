'use client';

import styles from '../Products.module.scss';

export default function ProductSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonFilters} />
      <div className={styles.skeletonGrid}>
        {[...Array(8)].map((_, index) => (
          <div key={index} className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonInfo}>
              <div className={styles.skeletonTitle} />
              <div className={styles.skeletonPrice} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

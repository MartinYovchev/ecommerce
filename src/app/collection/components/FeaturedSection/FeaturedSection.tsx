import Link from 'next/link';
import styles from '../../Collection.module.scss';

export default function FeaturedSection() {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.featuredContent}>
        <h2>New Arrivals</h2>
        <p>Be the first to get your hands on our latest sneaker drops</p>
        <Link href="/collection/new-arrivals" className={styles.featuredButton}>
          Shop New Arrivals
        </Link>
      </div>
    </section>
  );
}

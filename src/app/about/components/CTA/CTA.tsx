import Link from 'next/link';
import styles from '../../About.module.scss';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <h2>Join Us on Our Journey</h2>
      <p>Ready to experience the best in sneaker shopping?</p>
      <div className={styles.buttons}>
        <Link href="/collection" className={styles.shopButton}>
          Shop Collection
        </Link>
        <Link href="/contact" className={styles.contactButton}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}

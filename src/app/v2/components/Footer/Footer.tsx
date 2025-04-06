import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          Created by{' '}
          <Link
            href="https://www.linkedin.com/in/martin-yovchev-43643928a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creatorLink}
          >
            Martin Yovchev
          </Link>
        </p>
      </div>
    </footer>
  );
}

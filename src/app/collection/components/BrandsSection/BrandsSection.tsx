import Link from 'next/link';
import Image from 'next/image';
import styles from '../../Collection.module.scss';
import { Brand } from '../../types';

interface BrandsSectionProps {
  brands: Brand[];
}

export default function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <section className={styles.brandsSection}>
      <h2>Shop by Brand</h2>
      <div className={styles.brandsGrid}>
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/collection/brands/${brand.id}`}
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
  );
}

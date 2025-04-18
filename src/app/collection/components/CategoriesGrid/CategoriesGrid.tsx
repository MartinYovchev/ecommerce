import Link from 'next/link';
import Image from 'next/image';
import styles from '../../Collection.module.scss';
import { Category } from '../../types';

interface CategoriesGridProps {
  categories: Category[];
}

export default function CategoriesGrid({ categories }: CategoriesGridProps) {
  return (
    <section className={styles.categoriesGrid}>
      {categories.map((category) => (
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
  );
}

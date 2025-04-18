import styles from '../../Collection.module.scss';

interface FilterSectionProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterSection({
  currentFilter,
  onFilterChange,
}: FilterSectionProps) {
  return (
    <section className={styles.filterSection}>
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterButton} ${currentFilter === 'all' ? styles.active : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All Collections
        </button>
        <button
          className={`${styles.filterButton} ${currentFilter === 'featured' ? styles.active : ''}`}
          onClick={() => onFilterChange('featured')}
        >
          Featured
        </button>
        <button
          className={`${styles.filterButton} ${currentFilter === 'men' ? styles.active : ''}`}
          onClick={() => onFilterChange('men')}
        >
          Men
        </button>
        <button
          className={`${styles.filterButton} ${currentFilter === 'women' ? styles.active : ''}`}
          onClick={() => onFilterChange('women')}
        >
          Women
        </button>
        <button
          className={`${styles.filterButton} ${currentFilter === 'kids' ? styles.active : ''}`}
          onClick={() => onFilterChange('kids')}
        >
          Kids
        </button>
      </div>
    </section>
  );
}

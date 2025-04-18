'use client';

import { useState } from 'react';
import styles from '../Products.module.scss';

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

interface ProductFiltersProps {
  onSortChange: (sort: SortOption) => void;
  onFilterChange: (filters: Record<string, string[]>) => void;
}

export default function ProductFilters({
  onSortChange,
  onFilterChange,
}: ProductFiltersProps) {
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    setSortBy(value);
    onSortChange(value);
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = Number(e.target.value);
    setPriceRange(newPriceRange);
    onFilterChange({ price: newPriceRange.map(String) });
  };

  const handleSizeChange = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(newSizes);
    onFilterChange({ sizes: newSizes });
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterSection}>
        <h3>Sort By</h3>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className={styles.sortSelect}
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>

      <div className={styles.filterSection}>
        <h3>Price Range</h3>
        <div className={styles.priceRange}>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className={styles.rangeInput}
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className={styles.rangeInput}
          />
          <div className={styles.priceValues}>
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3>Size</h3>
        <div className={styles.sizeGrid}>
          {['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'].map(
            (size) => (
              <button
                key={size}
                className={`${styles.sizeButton} ${selectedSizes.includes(size) ? styles.selected : ''}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

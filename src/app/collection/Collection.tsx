'use client';

import { useState } from 'react';
import styles from './Collection.module.scss';
import { categories, brands, infoCards } from './data';
import Hero from './Hero/Hero';
import FilterSection from './FilterSection/FilterSection';
import CategoriesGrid from './CategoriesGrid/CategoriesGrid';
import BrandsSection from './BrandsSection/BrandsSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import InfoSection from './InfoSection/InfoSection';

export default function Collection() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filteredCategories =
    currentFilter === 'all'
      ? categories
      : categories.filter(
          (cat) =>
            cat.id === currentFilter ||
            (currentFilter === 'featured' && cat.featured)
        );

  return (
    <div className={styles.collectionContainer}>
      <Hero />
      <FilterSection
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      <CategoriesGrid categories={filteredCategories} />
      <BrandsSection brands={brands} />
      <FeaturedSection />
      <InfoSection infoCards={infoCards} />
    </div>
  );
}

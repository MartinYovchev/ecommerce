import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/collections.scss';

const collections = [
  {
    id: 1,
    name: 'Sneakers',
    image: '/sneakers.jpg',
    link: '/collections/sneakers',
  },
  { id: 2, name: 'Men', image: '/men.jpg', link: '/collections/men' },
  { id: 3, name: 'Women', image: '/women.jpg', link: '/collections/women' },
  {
    id: 4,
    name: 'Accessories',
    image: '/accessories.jpg',
    link: '/collections/accessories',
  },
];

function Collections() {
  return (
    <div className="collections-page">
      <h1>Shop Collections</h1>
      <div className="collections-grid">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-card">
            <Image
              src={collection.image}
              alt={collection.name}
              width={400}
              height={400}
              className="collection-image"
            />
            <div className="collection-info">
              <h2>{collection.name}</h2>
              <Link href={collection.link} passHref legacyBehavior>
                <a style={{ all: 'unset' }}>View More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Collections;

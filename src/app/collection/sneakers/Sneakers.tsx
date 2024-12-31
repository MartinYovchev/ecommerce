'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import '../../styles/product-page.scss';

type SneakersImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

type SneakersType = {
  id: string;
  name: string;
  info: string;
  price: string;
  formattedPrice?: string;
  type: string;
  image: SneakersImageType;
};

function Sneakers() {
  const [sneakers, setSneakers] = useState<SneakersType[]>([]);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data: { items: SneakersType[] } = await response.json();

        const updatedSneakers = (data.items || []).map((sneaker) => {
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(parseFloat(sneaker.price));

          return {
            ...sneaker,
            formattedPrice,
          };
        });

        const filteredSneakers = updatedSneakers.filter(
          (item: SneakersType) => item.type === 'men' || item.type === 'women'
        );
        setSneakers(filteredSneakers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSneakers();
  }, []);

  return (
    <div className="product-page">
      <h1>Sneakers Collections</h1>
      <div className="product-grid">
        {sneakers.map((sneakers) => (
          <div key={sneakers.id} className="product-card-wrapper">
            <div className="product-card">
              <Image
                src={sneakers.image.url || '/placeholder-image.jpg'}
                alt={sneakers.image.alt || 'Men Sneakers Image'}
                width={parseInt(sneakers.image.size.width)}
                height={parseInt(sneakers.image.size.height)}
                className="product-image"
              />
              <div className="product-info">
                <h2>{sneakers.name}</h2>
                <p className="price">{sneakers.formattedPrice}</p>
              </div>
            </div>
            <Link href={`/men/${sneakers.id}`}>
              <button className="cta-button">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sneakers;

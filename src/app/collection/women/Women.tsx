'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import '../../styles/product-page.scss';

type WomenSneakersImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

type WomenSneakersType = {
  id: string;
  name: string;
  info: string;
  price: string;
  formattedPrice?: string;
  type: string;
  image: WomenSneakersImageType;
};

function Women() {
  const [womenSneakers, setWomenSneakers] = useState<WomenSneakersType[]>([]);

  useEffect(() => {
    const fetchWomenSneakers = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data: { items: WomenSneakersType[] } = await response.json();

        const updatedWomenSneakers = (data.items || []).map((womenSneaker) => {
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(parseFloat(womenSneaker.price));

          return {
            ...womenSneaker,
            formattedPrice,
          };
        });

        const filteredWomenSneakers = updatedWomenSneakers.filter(
          (item: WomenSneakersType) => item.type === 'women'
        );
        setWomenSneakers(filteredWomenSneakers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWomenSneakers();
  }, []);

  return (
    <div className="product-page">
      <h1>Women Sneakers Collections</h1>
      <div className="product-grid">
        {womenSneakers.map((womenSneakers) => (
          <div key={womenSneakers.id} className="product-card">
            <Image
              src={womenSneakers.image.url || '/placeholder-image.jpg'}
              alt={womenSneakers.image.alt || 'Women Sneakers Image'}
              width={parseInt(womenSneakers.image.size.width)}
              height={parseInt(womenSneakers.image.size.height)}
              className="product-image"
            />
            <div className="product-info">
              <h2>{womenSneakers.name}</h2>
              <p className="price">{womenSneakers.formattedPrice}</p>
            </div>
            <Link href={`/women/${womenSneakers.id}`}>
              <button className="cta-button">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Women;

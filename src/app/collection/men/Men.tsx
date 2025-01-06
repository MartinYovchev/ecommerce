'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import '@styles/product-page.scss';

type MenImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

type MenType = {
  id: string;
  name: string;
  info: string;
  price: string;
  formattedPrice?: string;
  type: string;
  images: MenImageType[];
};

function Men() {
  const [menSneakers, setMenSneakers] = useState<MenType[]>([]);

  useEffect(() => {
    const fetchMenSneakers = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data: { items: MenType[] } = await response.json();

        const updatedMenSneakers = (data.items || []).map((maleSneaker) => {
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(parseFloat(maleSneaker.price));

          return {
            ...maleSneaker,
            formattedPrice,
          };
        });

        const filteredMenSneakers = updatedMenSneakers.filter(
          (item: MenType) => item.type === 'men'
        );
        setMenSneakers(filteredMenSneakers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMenSneakers();
  }, []);

  return (
    <div className="product-page">
      <h1>Mens Collections</h1>
      <div className="product-grid">
        {menSneakers.map((sneaker) => (
          <div key={sneaker.id} className="product-card">
            <Image
              src={sneaker.images[0].url || '/placeholder-image.jpg'}
              alt={sneaker.images[0].alt || 'Men Sneaker Image'}
              width={parseInt(sneaker.images[0].size.width)}
              height={parseInt(sneaker.images[0].size.height)}
              className="product-image"
            />
            <div className="product-info">
              <h2>{sneaker.name}</h2>
              <p className="price">{sneaker.formattedPrice}</p>
            </div>
            <Link href={`/collection/${sneaker.id}`}>
              <button className="cta-button">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Men;

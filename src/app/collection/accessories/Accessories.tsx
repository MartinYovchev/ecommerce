'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import '../../styles/product-page.scss';

type AccessoriesImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

type AccessoriesType = {
  id: string;
  name: string;
  info: string;
  price: string;
  formattedPrice?: string;
  type: string;
  image: AccessoriesImageType;
};

function Accessories() {
  const [accessories, setAccessories] = useState<AccessoriesType[]>([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data: { items: AccessoriesType[] } = await response.json();

        const updatedAccessories = (data.items || []).map((accessory) => {
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(parseFloat(accessory.price));

          return {
            ...accessory,
            formattedPrice,
          };
        });

        const filteredAccessories = updatedAccessories.filter(
          (item: AccessoriesType) => item.type === 'accessories'
        );
        setAccessories(filteredAccessories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div className="product-page">
      <h1>Accessories Collections</h1>
      <div className="product-grid">
        {accessories.map((accessory) => (
          <div key={accessory.id} className="product-card">
            <Image
              src={accessory.image.url || '/placeholder-image.jpg'}
              alt={accessory.image.alt || 'Accessory Image'}
              width={parseInt(accessory.image.size.width)}
              height={parseInt(accessory.image.size.height)}
              className="product-image"
            />
            <div className="product-info">
              <h2>{accessory.name}</h2>
              <p className="price">{accessory.formattedPrice}</p>
            </div>
            <Link href={`/accessories/${accessory.id}`}>
              <button className="cta-button">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Accessories;

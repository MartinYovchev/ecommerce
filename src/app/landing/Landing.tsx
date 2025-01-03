'use client';

import Image from 'next/image';
import '../styles/landing-page.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ProductImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

type ProductType = {
  id: string;
  name: string;
  info: string;
  price: string;
  type: string;
  images: ProductImageType[];
};

type ProductDataType = {
  items: ProductType[];
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Landing() {
  const [heroImages, setHeroImages] = useState<ProductImageType[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: ProductDataType = await response.json();

        // Random hero images
        const allImages = data.items.flatMap((product) => product.images);
        const randomHeroImages = shuffleArray(allImages).slice(0, 5);
        setHeroImages(randomHeroImages);

        // Static featured products
        const randomFeaturedProducts = shuffleArray(data.items).slice(0, 4);
        setFeaturedProducts(randomFeaturedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % heroImages.length
        );
        setIsFading(false);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Step Into Style</h1>
          <p>
            Discover the latest trends in sneakers. Comfort, fashion, and
            performance combined.
          </p>
          <Link href="/collection">
            <button className="cta-button">Shop Now</button>
          </Link>
        </div>
        <div className="hero-image">
          {heroImages.length > 0 && (
            <div
              className={`fade-image ${isFading ? 'fade-out' : 'fade-in'}`}
              key={currentImageIndex}
            >
              <Image
                src={heroImages[currentImageIndex].url}
                alt={heroImages[currentImageIndex].alt}
                width={600}
                height={600}
                className="image-product"
              />
            </div>
          )}
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Sneakers</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Image
                src={product.images[0].url}
                alt={product.images[0].alt}
                width={200}
                height={200}
                className="product-display-images"
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link href={`/collection/${product.id}`}>
                <button className="cta-button">Shop Now</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              &quot;The most comfortable sneakers I&apos;ve ever worn!&quot;
            </p>
            <h4>- Alex J.</h4>
          </div>
          <div className="testimonial-card">
            <p>&quot;Stylish and perfect for any occasion.&quot;</p>
            <h4>- Maria P.</h4>
          </div>
          <div className="testimonial-card">
            <p>&quot;Amazing quality and fast shipping.&quot;</p>
            <h4>- John D.</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;

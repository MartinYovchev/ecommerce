'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import useFetchProductByName from '@/app/hooks/useFetchProductByName';
import Loading from '@/app/loading';
import styles from './SingleProduct.module.scss';

export default function SingleProductPage({ type }: { type: string }) {
  const params = useParams();
  const productName =
    typeof params.product === 'string'
      ? params.product.split('%20').join(' ')
      : '';

  const { product, loading, error } = useFetchProductByName(type, productName);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addToCartError, setAddToCartError] = useState<string | null>(null);
  const [showImageOverlay, setShowImageOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setAddToCartError(null);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setAddToCartError('Please select a size');
      return;
    }

    console.log('Added to cart:', {
      product,
      size: selectedSize,
      quantity,
    });

    setAddToCartError(null);

    alert('Product added to cart!');
  };

  const handleImageOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowImageOverlay(false);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setShowImageOverlay(true);
  };

  // Handle keyboard events for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showImageOverlay) {
        if (e.key === 'Escape') {
          setShowImageOverlay(false);
        }
      }
    };

    // Prevent body scrolling when overlay is open
    if (showImageOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [showImageOverlay, product]);

  if (loading) return <Loading />;
  if (error) return <div className={styles.errorMessage}>{error}</div>;
  if (!product)
    return <div className={styles.errorMessage}>Product not found</div>;

  const availableSizes = ['36', '37', '38', '39', '40', '41', '42', '43'];
  const hasMultipleImages = product.images && product.images.length > 1;
  const currentImage = product.images && product.images[selectedImage];

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link>
        <span className={styles.separator}>/</span>
        <Link href="/collection/kid-shoes">Kids&apos; Shoes</Link>
        <span className={styles.separator}>/</span>
        <span>{product.name}</span>
      </div>

      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          {currentImage && (
            <>
              <Image
                src={currentImage.url}
                alt={currentImage.alt || product.name}
                width={500}
                height={500}
                priority
                onClick={() => setShowImageOverlay(true)}
              />

              {hasMultipleImages && (
                <div className={styles.thumbnailContainer}>
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.thumbnail} ${selectedImage === index ? styles.activeThumbnail : ''}`}
                      onClick={() => handleImageClick(index)}
                    >
                      <Image
                        src={image.url}
                        alt={
                          image.alt || `${product.name} - image ${index + 1}`
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              )}

              {showImageOverlay && currentImage && (
                <div
                  className={styles.imageOverlay}
                  onClick={handleImageOverlayClick}
                >
                  <div className={styles.overlayContent}>
                    <button
                      className={styles.closeButton}
                      onClick={() => setShowImageOverlay(false)}
                    >
                      ×
                    </button>

                    {hasMultipleImages && (
                      <>
                        <button
                          className={`${styles.navButton} ${styles.prevButton}`}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          ‹
                        </button>
                        <button
                          className={`${styles.navButton} ${styles.nextButton}`}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          ›
                        </button>
                      </>
                    )}

                    <Image
                      src={currentImage.url}
                      alt={currentImage.alt || product.name}
                      width={800}
                      height={800}
                      priority
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>{product.formattedPrice}</div>

          <p className={styles.description}>{product.info}</p>

          <div className={styles.divider}></div>

          <div>
            <h3 className={styles.sizesTitle}>Select Size</h3>
            <div className={styles.sizesGrid}>
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${
                    selectedSize === size ? styles.selected : ''
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            {addToCartError && (
              <div className={styles.errorMessage}>{addToCartError}</div>
            )}
          </div>

          <div className={styles.quantityContainer}>
            <span className={styles.label}>Quantity:</span>
            <div className={styles.quantityControls}>
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

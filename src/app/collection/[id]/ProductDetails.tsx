'use client';

import { useState } from 'react';
import Image from 'next/image';
import '../../styles/item-page.scss';

type ProductImageType = {
  url: string;
  alt: string;
  size: {
    width: string;
    height: string;
  };
};

export type ProductDetailsType = {
  id: string;
  name: string;
  info: string;
  price: number;
  discount: number;
  images: ProductImageType[];
};

const ProductDetails = ({
  product,
}: {
  product: ProductDetailsType | null;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    // alert(`Added ${quantity} of ${product.name} to the cart.`);
  };

  return (
    <div className={'product-details-container'}>
      <div className={'product-details-imageGallery'}>
        <div className={'product-details-mainImage'}>
          {product?.images[0].url && (
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              width={500}
              height={500}
            />
          )}
        </div>
        <div className={'product-details-thumbnailGallery'}>
          {product.images.map((image, index) => (
            <div
              key={index}
              className={`${'product-details-thumbnail'} ${selectedImage?.url}`}
              onClick={() => setSelectedImage(image)}
            >
              <Image src={image.url} alt={image.alt} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>

      <div className={'product-details-details'}>
        <h2>{product.name}</h2>
        <p>{product.info}</p>

        {/* POSSIBLE DISCOUNT FUNCTIONALITY*/
        /* <div className={"product-details-priceSection"}>
          <span className={"product-details-discountedPrice"}>
            $
            {(product.price - product.price * (product.discount / 100)).toFixed(
              2
            )}
          </span>
          <span className={"product-details-originalPrice"}>${product.price}</span>
          <span className={"product-details-discount"}>{product.discount}% off</span>
        </div> */}

        <div className={'product-details-priceSection'}>
          <span className={'product-details-discountedPrice'}>
            ${product.price}
          </span>
        </div>

        <div className={'product-details-quantitySection'}>
          <div className="product-details-counter">
            <button
              className="change"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              ⇦
            </button>
            <span>{quantity}</span>
            <button
              className="change"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              ⇨
            </button>
          </div>
          <button
            className={'product-details-addToCart'}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

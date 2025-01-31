import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import '@styles/cart-button.scss';

const CartButton = ({ itemCount }: { itemCount: number }) => (
  <Link href="/cart" passHref legacyBehavior>
    <a
      className="cart-button"
      aria-label={`Cart (${itemCount} items)`}
      style={{ all: 'unset' }}
    >
      <div className="cart-container">
        <Image
          src="/images_website/shopping-cart.png"
          width={40}
          height={45}
          alt="Cart"
          priority
        />
        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
      </div>
    </a>
  </Link>
);

export default CartButton;

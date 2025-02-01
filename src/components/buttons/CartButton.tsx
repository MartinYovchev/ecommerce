import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import '@styles/cart-button.scss';
import { useCart } from '@/context/CartContext';

function CartButton() {

  const { cart } = useCart();

  return (
    <Link href="/cart" passHref legacyBehavior>
      <a
        className="cart-button"
        aria-label={`Cart (${cart.length} items)`}
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
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </div>
      </a>
    </Link>
  );
}

export default CartButton;

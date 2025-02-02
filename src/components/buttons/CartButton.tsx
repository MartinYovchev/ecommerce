import Link from 'next/link';
import Image from 'next/image';
import '@styles/cart-button.scss';
import { useCart } from '@context/CartContext';

function CartButton() {
  const { cartCount } = useCart();

  return (
    cartCount > 0 && (
      <Link href="/cart" passHref legacyBehavior>
        <a
          className="cart-button"
          aria-label={`Cart (${cartCount} items)`}
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
            {/* <span className="cart-badge">{cartCount}</span> */}
          </div>
        </a>
      </Link>
    )
  );
}

export default CartButton;

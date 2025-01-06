import { CartProvider } from '@context/CartContext';
import CartBasket from './CartBasket';

export default function CartPage() {
  return (
    <CartProvider>
      <CartBasket />
    </CartProvider>
  );
}

import CartBasket from '../components/context/CartBasket';
import { CartProvider } from '../components/context/CartContext';

export default function CartPage() {
  return (
    <CartProvider>
      <CartBasket />
    </CartProvider>
  );
}

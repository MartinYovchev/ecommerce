'use client';

import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import '@styles/cart.scss';

const CartBasket = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-basket-wrapper">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Image
                src={item.images[0].url}
                alt={item.images[0].alt}
                width={100}
                height={100}
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>
                  ${item.price} x {item.quantity || 1}
                </p>
                <div className="cart-item-quantity">
                  <button
                    className="change"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    ⇦
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="change"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    ⇨
                  </button>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total:</h3>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartBasket;

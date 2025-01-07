'use client';

import { useCart } from '@/context/CartContext';
import Checkout from './Checkout';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '@styles/checkout.scss';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckoutPage() {
  const { totalPrice } = useCart();

  return (
    <main>
      <div>
        <h1>SNEAKERS SHOP</h1>
        <h2>Has requested </h2>
        <span>{totalPrice} $</span>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: 'payment',
          amount: convertToSubcurrency(totalPrice),
          currency: 'usd',
        }}
      >
        <Checkout amount={totalPrice} />
      </Elements>
    </main>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';
import '@styles/success.scss';
import { useEffect } from 'react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get('payment_intent');
  const payment_intent_client_secret = searchParams.get(
    'payment_intent_client_secret'
  );
  const redirect_status = searchParams.get('redirect_status');
  const amount = searchParams.get('amount');

  const isSuccess =
    redirect_status === 'succeeded' &&
    payment_intent &&
    payment_intent_client_secret &&
    amount;

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }, []);

  return (
    <div className="success-container">
      <h1>{isSuccess ? 'Payment Successful!' : 'Payment Failed'}</h1>
      {isSuccess ? (
        <>
          <h2>Thank you for your purchase!</h2>
          <p>Your payment was successfully processed.</p>
          <p>
            Payment Intent ID: <strong>{payment_intent}</strong>
          </p>
          <p>
            Amount: <strong>{amount}</strong>
          </p>
        </>
      ) : (
        <>
          <h2>Oops, something went wrong.</h2>
          <p>Your payment could not be completed.</p>
          <p>Please try again or contact support if the issue persists.</p>
        </>
      )}
    </div>
  );
}

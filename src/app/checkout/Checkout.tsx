'use client';

import React, { useEffect, useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import Loading from '../loading';

function Checkout({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams:{
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    })

  if (error){
    setErrorMessage(error.message);
  } else {

  }

  setLoading(false)

  };

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  if(!stripe || !clientSecret || !elements){
    return <Loading />
  }

  return (
    <form onSubmit={handleSubmit}>
      {clientSecret && <PaymentElement />}
      {errorMessage && <div>{errorMessage}</div>}

      <button disabled={!stripe || loading}>
        {!loading ? `Pay $${amount}` : 'Processing...'}
      </button>
    </form>
  );
}
export default Checkout;

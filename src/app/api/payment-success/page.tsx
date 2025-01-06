'use client';

import { useSearchParams } from 'next/navigation';

const Success = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');

  return (
    <div>
      <h1>Thank you!</h1>
      <h2>You have successfully sent</h2>
      <span>{amount}</span>
    </div>
  );
};

export default Success;
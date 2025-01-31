'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '@styles/buttons.scss';

const SignupButton: React.FC = () => {
  const router = useRouter();

  const handleSignup = () => {
    router.push('/api/auth/signup');
  };

  return (
    <button onClick={handleSignup} className="btn btn-success">
      Signup
    </button>
  );
};

export default SignupButton;

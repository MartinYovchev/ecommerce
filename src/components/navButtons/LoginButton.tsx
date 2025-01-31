'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '@styles/buttons.scss';

const LoginButton: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/api/auth/login');
  };

  return (
    <button onClick={handleLogin} className="btn btn-primary">
      Login
    </button>
  );
};

export default LoginButton;

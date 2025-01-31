'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '@styles/buttons.scss';
import { useUser } from '@auth0/nextjs-auth0/client';

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleLogout = () => {
    router.push('/api/auth/logout'); // Redirect after logout (can be to home page)
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Logout
    </button>
  );
};

export default LogoutButton;

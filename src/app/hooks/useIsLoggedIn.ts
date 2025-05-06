'use client';

import { useAuth } from '../context/AuthContext';

export const useIsLoggedIn = () => {
  const { user } = useAuth();
  return !!user; // Returns true if user exists, false if null
};

import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile(); // Check initial screen width
    window.addEventListener('resize', checkIfMobile); // Listen for window resize

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  return isMobile;
};

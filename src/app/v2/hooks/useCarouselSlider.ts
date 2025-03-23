import { useState, useEffect } from 'react';
import useIsMobile from './useIsMobile';

export default function useCarousel(
  desktopImages: string[],
  mobileImages: string[],
  intervalTime = 5000
) {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return { currentIndex, images };
}

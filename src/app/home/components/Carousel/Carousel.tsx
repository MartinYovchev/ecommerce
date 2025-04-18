import Image from 'next/image';
import useCarousel from '../../../hooks/useCarouselSlider';
import styles from './Carousel.module.scss';

export default function Carousel() {
  const desktopImages = [
    '/v2/carousel1.jpg',
    '/v2/carousel2.jpg',
    '/v2/carousel3.jpg',
  ];
  const mobileImages = [
    '/v2/mobileSlider1.jpg',
    '/v2/mobileSlider2.jpg',
    '/v2/mobileSlider3.jpg',
  ];

  const { currentIndex, images } = useCarousel(desktopImages, mobileImages);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselImagesWrapper}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Carousel Image ${index + 1}`}
            className={styles.carouselImage}
            width={1000}
            height={1000}
          />
        ))}
      </div>

      <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

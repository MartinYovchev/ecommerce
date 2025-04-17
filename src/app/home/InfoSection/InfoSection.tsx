'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './InfoSection.module.scss';

const infoBlocks = [
  {
    id: 'quality',
    icon: '/v2/icons/quality.svg',
    title: 'Premium Quality',
    description:
      'We source only the finest materials and partner with reputable manufacturers to deliver top-tier footwear.',
  },
  {
    id: 'shipping',
    icon: '/v2/icons/shipping.svg',
    title: 'Fast Delivery',
    description:
      'Free worldwide shipping on all orders over $150. Quick delivery with real-time tracking information.',
  },
  {
    id: 'returns',
    icon: '/v2/icons/returns.svg',
    title: 'Easy Returns',
    description:
      '30-day hassle-free return policy. Not satisfied? We will make it right with a full refund or exchange.',
  },
  {
    id: 'support',
    icon: '/v2/icons/support.svg',
    title: '24/7 Support',
    description:
      'Our dedicated support team is always here to help with any questions or concerns about your order.',
  },
];

export default function InfoSection() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoHeader}>
        <h2>Why Shop With Us?</h2>
        <p className={styles.subheading}>
          We&aposre dedicated to providing an exceptional shopping experience
          from click to delivery
        </p>
      </div>

      <div className={styles.infoBlocks}>
        {infoBlocks.map((block) => (
          <div key={block.id} className={styles.infoBlock}>
            <div className={styles.iconContainer}>
              <Image
                src={block.icon}
                alt={block.title}
                width={40}
                height={40}
                className={styles.icon}
              />
            </div>
            <h3>{block.title}</h3>
            <p>{block.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h3>Discover Our Collection</h3>
          <p>Browse our latest arrivals and find your perfect pair</p>
          <Link href="/products" className={styles.ctaButton}>
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}

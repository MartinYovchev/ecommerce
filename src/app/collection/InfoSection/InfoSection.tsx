import Image from 'next/image';
import styles from '../Collection.module.scss';
import { InfoCard } from '../types';

interface InfoSectionProps {
  infoCards: InfoCard[];
}

export default function InfoSection({ infoCards }: InfoSectionProps) {
  return (
    <section className={styles.infoSection}>
      {infoCards.map((card, index) => (
        <div key={index} className={styles.infoCard}>
          <div className={styles.iconContainer}>
            <Image src={card.icon} alt={card.title} width={40} height={40} />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </section>
  );
}

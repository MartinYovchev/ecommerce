import Image from 'next/image';
import styles from '../../About.module.scss';

export default function Story() {
  return (
    <section className={styles.storySection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/about/store.jpg"
              alt="Our store"
              width={500}
              height={300}
              className={styles.storeImage}
            />
          </div>
        </div>
        <div className={styles.storyContent}>
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Sneakers has grown from a small boutique store to
            one of the leading sneaker retailers in the country. Our journey
            began with a simple passion for quality footwear and has evolved
            into a commitment to providing the best sneaker shopping experience
            both online and in-store.
          </p>
          <p>
            We pride ourselves on curating collections from the world&apos;s top
            brands while also supporting emerging designers who bring fresh
            perspectives to sneaker culture.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.scss';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in the footwear industry, John founded Sneakers with a vision to provide high-quality, stylish shoes at affordable prices.',
      image: '/images/team/founder.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Creative Director',
      bio: 'Jane brings her creative vision and industry expertise to ensure our designs are always ahead of the curve and meeting the highest standards.',
      image: '/images/team/creative-director.jpg',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Head of Operations',
      bio: 'Mike oversees our global supply chain and ensures that our manufacturing processes are efficient, sustainable, and ethical.',
      image: '/images/team/operations.jpg',
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.hero}>
        <h1>About Sneakers</h1>
        <p>Your premium sneaker destination since 2010</p>
      </div>

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
              into a commitment to providing the best sneaker shopping
              experience both online and in-store.
            </p>
            <p>
              We pride ourselves on curating collections from the world&apos;s
              top brands while also supporting emerging designers who bring
              fresh perspectives to sneaker culture.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.tabsSection}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${activeTab === 'mission' ? styles.active : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'values' ? styles.active : ''}`}
            onClick={() => setActiveTab('values')}
          >
            Our Values
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'sustainability' ? styles.active : ''}`}
            onClick={() => setActiveTab('sustainability')}
          >
            Sustainability
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'mission' && (
            <div>
              <h3>Our Mission</h3>
              <p>
                At Sneakers, our mission is to provide customers with
                high-quality, stylish footwear that combines comfort,
                durability, and the latest trends. We aim to create an inclusive
                shopping experience where sneaker enthusiasts of all backgrounds
                can find their perfect pair.
              </p>
              <p>
                We&apos;re dedicated to exceptional customer service,
                sustainable practices, and celebrating the culture and community
                that surrounds sneaker collecting and wearing.
              </p>
            </div>
          )}

          {activeTab === 'values' && (
            <div>
              <h3>Our Values</h3>
              <ul>
                <li>
                  <strong>Quality First:</strong> We never compromise on the
                  quality of our products.
                </li>
                <li>
                  <strong>Customer Satisfaction:</strong> Your happiness with
                  our products and service is our top priority.
                </li>
                <li>
                  <strong>Authenticity:</strong> We guarantee all products are
                  100% genuine.
                </li>
                <li>
                  <strong>Inclusivity:</strong> We believe sneaker culture is
                  for everyone.
                </li>
                <li>
                  <strong>Innovation:</strong> We continuously seek new ways to
                  improve our offerings and experience.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'sustainability' && (
            <div>
              <h3>Our Commitment to Sustainability</h3>
              <p>
                We recognize our responsibility to the planet and future
                generations. That&apos;s why we&apos;re committed to:
              </p>
              <ul>
                <li>
                  Partnering with brands that use sustainable materials and
                  ethical manufacturing processes
                </li>
                <li>
                  Minimizing packaging waste and using recyclable materials
                </li>
                <li>Operating energy-efficient stores and warehouses</li>
                <li>
                  Supporting sneaker recycling programs to give old shoes new
                  life
                </li>
                <li>
                  Offsetting our carbon footprint through verified environmental
                  projects
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className={styles.profileImage}
                />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Join Us on Our Journey</h2>
        <p>Ready to experience the best in sneaker shopping?</p>
        <div className={styles.buttons}>
          <Link href="/collection" className={styles.shopButton}>
            Shop Collection
          </Link>
          <Link href="/contact" className={styles.contactButton}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

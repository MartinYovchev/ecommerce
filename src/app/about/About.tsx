'use client';

import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import Tabs from './components/Tabs/Tabs';
import Team from './components/Team/Team';
import CTA from './components/CTA/CTA';
import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <Hero />
      <Story />
      <Tabs />
      <Team />
      <CTA />
    </div>
  );
}

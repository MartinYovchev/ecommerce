import { useState } from 'react';
import styles from '../../About.module.scss';
import { tabContent } from '../../data';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
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
            <h3>{tabContent.mission.title}</h3>
            {tabContent.mission.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {activeTab === 'values' && (
          <div>
            <h3>{tabContent.values.title}</h3>
            <ul style={{ listStyle: 'none' }}>
              {tabContent.values.items.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'sustainability' && (
          <div>
            <h3>{tabContent.sustainability.title}</h3>
            <p>{tabContent.sustainability.intro}</p>
            <ul style={{ listStyle: 'none' }}>
              {tabContent.sustainability.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

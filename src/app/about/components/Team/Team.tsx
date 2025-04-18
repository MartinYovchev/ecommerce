import Image from 'next/image';
import styles from '../../About.module.scss';
import { teamMembers } from '../../data';

export default function Team() {
  return (
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
  );
}

import React from 'react';
import styles from './MembersSection.module.scss';

interface Member {
  id?: string;
  name: string;
  title: string;
  location?: string;
  quote?: string;
  imageUrl: string;
  imageAlt: string;
}

const membersData: Member[] = [
  {
    id: '1',
    name: 'James A.',
    title: 'Founder, KinPay',
    location: 'Lagos',
    quote: "The M3 was my first visibility, success, and trust. If you're building something serious in payments, this is where you want to be.",
    imageUrl: '/images/heroImage.png',
    imageAlt: 'James A. - Founder of KinPay'
  },
  {
    id: '2',
    name: 'Omar H.',
    title: 'Infrastructure Engineer',
    location: 'Cairo',
    quote: "The M3 connects North Africa to the larger ecosystem in a way that's long overdue. It's the bridge I didn't know we needed.",
    imageUrl: '/images/heroImage.png',
    imageAlt: 'Omar H. - Infrastructure Engineer'
  },
  {
    id: '3',
    name: 'Leila K.',
    title: 'API Product Manager',
    location: 'Dakar',
    quote: "For once, I'm in a room where African women building tech aren't the exception. That matters.",
    imageUrl: '/images/heroImage.png',
    imageAlt: 'Leila K. - API Product Manager'
  },
  {
    id: '4',
    name: 'Samira M.',
    title: 'Compliance Architect',
    location: 'Nairobi',
    quote: "It's more than a network. It's where I go to stay ahead of regulatory shifts and connect with people shaping the specs from the inside.",
    imageUrl: '/images/heroImage.png',
    imageAlt: 'Samira M. - Compliance Architect'
  },
  {
    id: '5',
    name: 'Femi D.',
    title: 'Engineering Manager',
    location: 'Johannesburg',
    quote: "I've found peers who challenge how I think and push me to build better. That's not easy to come by.",
    imageUrl: '/images/heroImage.png',
    imageAlt: 'Femi D. - Engineering Manager'
  },
  {
    id: '6',
    name: 'Ngozi A.',
    title: 'CTO',
    location: 'Lagos',
    quote: "Being part of The M3 gives me something rare - honest conversations with people solving the same deep technical problems I face every day.",
    imageUrl: '/images/heroImage.png',
    imageAlt: 'Ngozi A. - CTO'
  }
];

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className={styles.memberCard} style={{ backgroundImage: `url(${member.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberTitle}>
          {member.title}, {member.location}
        </p>
        <p className={styles.memberQuote}>{member.quote}</p>
      </div>
    </div>
  );
};

const MembersSection: React.FC = () => {
  return (
    <section className={styles.membersSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>For Builders by Builders</h2>
          <p className={styles.subtitle}>
            A spotlight on standout members of The M3, sharing what the community 
            means to them and their role in shaping Africa&apos;s payment future.
          </p>
        </div>
        
        <div className={styles.membersGrid}>
          {membersData.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
    </section>
  );
};

export default MembersSection;
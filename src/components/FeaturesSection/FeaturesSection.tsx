import React from 'react';
import Image from 'next/image';
import styles from './FeaturesSection.module.scss';

type FeatureCardProps = {
  number: number;
  iconSrc: string;
  title: string;
  description: string;
};

const FeatureCard = ({ number, iconSrc, title, description }: FeatureCardProps) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardTop}>
        <div className={styles.featureNumber}>{number}</div>
        <div className={styles.featureIcon}>
          <Image
            src={iconSrc}
            alt={title}
            width={80}
            height={80}
            priority
          />
        </div>

      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      number: 1,
      iconSrc: '/svgs/technical-depth.svg',
      title: 'Technical Depth',
      description: 'Gain access to deep technical resources, implementation guides, and peer-reviewed solutions across Africa\'s payments ecosystem.'
    },
    {
      number: 2,
      iconSrc: '/svgs/insider-access.svg',
      title: 'Insider Access',
      description: 'Get early insights from regulators, infrastructure leaders, and fintech trailblazers shaping the future of African payments.'
    },
    {
      number: 3,
      iconSrc: '/svgs/pan-african.svg',
      title: 'Pan-African Network',
      description: 'Connect with peers, partners, and thought leaders from Lagos to Nairobi, Cairo to Cape Town driving fintech forward across borders.'
    }
  ];

  return (
    <section className={styles.featuresSection}>
        <h2 className={styles.heading}>For the Builders of African Fintech</h2>
        <p className={styles.subheading}>
          A trusted, continent-wide ecosystem built by insiders, for innovators, where technical expertise, strategic access, and community converge to shape the future of African fintech.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
    </section>
  );
};

export default FeaturesSection;

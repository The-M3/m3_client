import React from 'react';
import Image from 'next/image';
import styles from './FeaturesSection.module.scss';

type FeatureCardProps = {
  number: number;
  iconSrc: string;
  title: string;
  description: string;
  altText: string;
};

const FeatureCard = ({ number, iconSrc, title, description, altText }: FeatureCardProps) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardTop}>
        <div className={styles.featureNumber}>{number}</div>
        <div className={styles.featureIcon}>
          <Image
            src={iconSrc}
            alt={altText}
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
      altText: 'Illustration of mobile interface with stacked coins and microchip',
      number: 1,
      iconSrc: '/svgs/technical-depth.svg',
      title: 'Deep Technical Insights',
      description: 'Unlock peer-reviewed payment architecture solutions, implementation guides, and developer toolkits tailored to the realities of African payment systems, API design, and secure transaction flows.'
    },
    {
      altText: 'Illustration of person with settings icon and document',
      number: 2,
      iconSrc: '/svgs/insider-access.svg',
      title: 'Industry Insider Access',
      description: 'Gain rare visibility into the inner workings of Africa’s fintech infrastructure. Learn directly from regulators, payment system architects, and technical leaders behind the continent’s most scalable digital finance solutions.',
    },
    {
      altText: 'Illustration of African map with location pins',
      number: 3,
      iconSrc: '/svgs/pan-african.svg',
      title: 'Pan-African Network',
      description: 'Build high-signal connections with the innovators, specialists, and investors powering interoperability, cross-border payments, and financial infrastructure innovation in 20+ African markets.',
    }
  ];

  return (
    <section className={styles.featuresSection}>
        <h2 className={styles.heading}>Join the Community of Innovators Behind Africa’s Leading Payment Solutions</h2>
        <p className={styles.subheading}>
        Be part of the trusted network advancing African payment systems, driving scalable fintech infrastructure and shaping the future of cross-border payments. The M3 community is where experts in payment architecture, secure transaction design, and digital finance in Africa come together to build real-world solutions and lead meaningful fintech collaboration across the continent.
</p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              number={feature.number}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
              altText={feature.altText}
            />
          ))}
        </div>
    </section>
  );
};

export default FeaturesSection;

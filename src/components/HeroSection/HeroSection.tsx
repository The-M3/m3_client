import React from 'react';
import styles from './HeroSection.module.scss';
import { Button } from '../ui';
import Link from 'next/link';
import OptimizedImage from '../OptimizedImage/OptimizedImage';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heading}>
      The Premier Network Advancing African Payment Systems and Fintech Infrastructure
      </h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.heroImage}>
            <OptimizedImage
              src="/images/heroImage.jpeg"
              alt="Four professionally dressed African professionals—two men and two women—smiling and gathered around a laptop, engaged in a collaborative discussion."
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className={styles.description}>
          <p>
          The M3 is the pan-African community where payment engineers, product leaders, and infrastructure specialists collaborate to shape the future of digital finance in Africa. Gain exclusive access to deep technical insights, real-world implementation playbooks, and the innovators building the next generation of Africa’s financial infrastructure.
          </p>
          <Link href="/community">
          <Button>
            JOIN OUR COMMUNITY
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

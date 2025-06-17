import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Button } from '../ui';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heading}>
        Community of Africa's Technologists Building the Future of Payment
      </h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.imageContainer}>
          {/* Using a placeholder for the hero image */}
          <div className={styles.heroImage} style={{
            backgroundColor: '#e0e0e0',
            width: '100%',
            height: '300px',
            position: 'relative'
          }}>
            <Image
              src="/images/heroImage.png"
              alt="A group of African professionals looking at a laptop"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className={styles.description}>
          <p>
            At The M3, we're uniting the brightest minds building Africa's payment systems from infrastructure engineers to fintech founders.
          </p>
          <Button>
            JOIN OUR COMMUNITY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

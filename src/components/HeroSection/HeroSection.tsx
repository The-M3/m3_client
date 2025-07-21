import React from 'react';
import styles from './HeroSection.module.scss';
import Image from 'next/image';
import { Button } from '../ui';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heading}>
      A NETWORK OF PROFESSIONALS SHAPING AFRICA’S PAYMENT ECOSYSTEM
      </h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.heroImage}>
            <Image
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
          The M3 brings together the people building Africa&apos;s payment systems. If you&apos;re working on payment infrastructure, integrating solutions, or crafting policy that matters, this is where you belong.
          You&apos;ll get inside access to how things work, the technical details that matter, the strategies that succeed, and direct connections to the folks making it all happen across the continent.

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

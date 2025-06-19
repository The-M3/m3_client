import React from 'react';
import styles from './SponsorsSection.module.scss';
import { Button } from '../ui';
import Image from 'next/image';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

const sponsorsData: Sponsor[] = [
  {
    id: '1',
    name: 'Layers',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '2',
    name: 'Circoles',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '3',
    name: 'Catalog',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '4',
    name: 'Sisyphus',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '5',
    name: 'Quotient',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '6',
    name: 'Layers',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '7',
    name: 'Circoles',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '8',
    name: 'Catalog',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '9',
    name: 'Sisyphus',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '10',
    name: 'Quotient',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '11',
    name: 'Layers',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '12',
    name: 'Circoles',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '13',
    name: 'Catalog',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '14',
    name: 'Sisyphus',
    logo: '/svgs/layerLogo.svg',
  },
  {
    id: '15',
    name: 'Quotient',
    logo: '/svgs/layerLogo.svg',
  },
];

const SponsorsSection: React.FC = () => {
  return (
    <section className={styles.sponsorsSection}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>Our Sponsors</h2>
          <p className={styles.description}>
            The M3 is backed by organizations that believe in infrastructure, collaboration, and the future of African payments. Sponsoring The M3 means direct access to Africa&apos;s top CTOs, engineers, and decision-makers, plus the opportunity to lead conversations that shape the continent&apos;s fintech landscape.
          </p>
          <Button className={styles.sponsorButton}>
            BECOME A SPONSOR
          </Button>
        </div>
        
        <div className={styles.logosContainer}>
            {sponsorsData.map((sponsor) => (
                <div 
                  key={sponsor.id} 
                  className={styles.logoItem} 
                  style={{ 
                    '--animation-delay': `${Math.random() * -3}s`
                  } as React.CSSProperties}
                >
                    <Image src={sponsor.logo} alt={sponsor.name} width={30} height={30} />
                    <span>{sponsor.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

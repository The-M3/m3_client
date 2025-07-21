import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* <div className={styles.leftSection}>
          <a href="mailto:hello@them3.co" className={styles.email}>
          hello@them3.co 
          </a>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Regional hubs information</a>
            <a href="#" className={styles.navLink}>Privacy policy</a>
            <a href="#" className={styles.navLink}>Terms of service</a>
          </nav>
        </div> */}

        <div className={styles.centerSection}>
            <Image src="/svgs/m3_footer_logo.svg" alt="The M3" width={130} color='#DAA765' height={130} priority />
        </div>

        <div className={styles.rightSection}>
          <nav className={styles.socialNav}>
          <a href="mailto:hello@them3.co" className={styles.email}>
          hello@them3.co 
          </a>
            <a target="_blank" href="https://www.youtube.com/@TheM3_hq" className={styles.socialLink}>
            <Image src="/svgs/youtube-icon.svg" alt="The M3" width={20} height={20} priority />
            
            </a>
            <a target="_blank" href="https://www.instagram.com/them3_hq/" className={styles.socialLink}>
            <Image src="/svgs/instagram-icon.svg" alt="The M3" width={20} height={20} priority />
            
            </a>
            <a target="_blank" href="https://x.com/TheM3_HQ" className={styles.socialLink}>
            <Image src="/svgs/x-icon.svg" alt="The M3" width={20} height={20} priority />

            </a>
            <a target="_blank" href="https://www.linkedin.com/company/the-m3/" className={styles.socialLink}>
            <Image src="/svgs/linkedin-icon.svg" alt="The M3" width={20} height={20} priority />

            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

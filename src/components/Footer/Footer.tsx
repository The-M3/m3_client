import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Contact & Links */}
        <div className={styles.leftSection}>
          <a href="mailto:josh@TheM3.com" className={styles.email}>
            josh@TheM3.com
          </a>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Regional hubs information</a>
            <a href="#" className={styles.navLink}>Privacy policy</a>
            <a href="#" className={styles.navLink}>Terms of service</a>
          </nav>
        </div>

        {/* Center Section - Logo */}
        <div className={styles.centerSection}>
          <div className={styles.logo}>
            <Image src="/svgs/m3_footer_logo.svg" alt="The M3" width={130} color='#DAA765' height={130} priority />
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className={styles.rightSection}>
          <nav className={styles.socialNav}>
            <a href="#" className={styles.socialLink}>Facebook</a>
            <a href="#" className={styles.socialLink}>Instagram</a>
            <a href="#" className={styles.socialLink}>Twitter</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

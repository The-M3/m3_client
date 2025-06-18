"use client";

import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/svgs/appIcon.svg"
          alt="The M3"
          width={80}
          height={40}
          priority
        />
      </div>

      <button className={styles.menuButton} onClick={toggleMenu}>
        <Image
          src={isMenuOpen ? "/svgs/closeicon.svg" : "/svgs/menuicon.svg"}
          alt="Menu"
          width={24}
          height={24}
          priority
        />
      </button>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <Link href="#about" className={styles.link}>About us</Link>
        <Link href="#events" className={styles.link}>Events</Link>
        <Link href="#resources" className={styles.link}>Resources</Link>
        <Link href="#membership" className={styles.link}>Membership</Link>
        <Link href="#sponsors" className={styles.link}>Sponsors</Link>
        <Button className={styles.joinButton}>JOIN OUR COMMUNITY</Button>
      </div>
    </nav>
  );
};

export default Navbar;

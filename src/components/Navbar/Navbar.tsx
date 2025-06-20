"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      // Only apply scroll behavior on mobile devices
      if (window.innerWidth <= 768) {
        const currentScrollY = window.scrollY;
        
        // If scrolling down and past threshold, hide navbar
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsMenuOpen(false); // Close menu if open when hiding
        } 
        // If scrolling up, show navbar
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      } else {
        // Always show navbar on desktop
        setIsVisible(true);
      }
    };

    const handleResize = () => {
      // Reset visibility on resize
      if (window.innerWidth > 768) {
        setIsVisible(true);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${!isVisible ? styles.hidden : ''}`}>
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
        <Link href="/sponsors" className={styles.link}>Sponsors</Link>
        <Button className={styles.joinButton}>JOIN OUR COMMUNITY</Button>
      </div>
    </nav>
  );
};

export default Navbar;

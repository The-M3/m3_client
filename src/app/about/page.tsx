import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import DispatchSection from '@/components/Dispatch';
import Footer from '@/components/Footer/Footer';
import SponsorsSection from '@/components/SponsorsSection';
import Content from './Content';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Content />
      <SponsorsSection />
      <DispatchSection />
      <Footer />
    </>
  );
};

export default AboutPage;

import React from 'react';
import SponsorForm from './SponsorForm';
import Navbar from '@/components/Navbar/Navbar';
import DispatchSection from '@/components/Dispatch';
import Footer from '@/components/Footer/Footer';

const SponsorsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <SponsorForm />
      <DispatchSection />
      <Footer />
    </>
  );
};

export default SponsorsPage;

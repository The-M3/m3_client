import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import DispatchSection from '@/components/Dispatch';
import Footer from '@/components/Footer/Footer';
import CommunityForm from './CommunityForm';

const CommunityPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <CommunityForm />
      <DispatchSection />
      <Footer />
    </>
  );
};

export default CommunityPage;
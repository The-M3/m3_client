import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import EventsSection from "../components/EventsSection";
import MembersSection from "../components/MembersSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <MembersSection />
      <Footer />
    </>
  );
}

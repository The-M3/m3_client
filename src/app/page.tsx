"use client" 
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import EventsSection from "../components/EventsSection";
import Testimonials from "../components/Testimonials";
import SponsorsSection from "../components/SponsorsSection";
import ArticleCarousel from "../components/ArticleCarousel";
import Footer from "../components/Footer";
import DispatchSection from "@/components/Dispatch";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <Testimonials />
      <ArticleCarousel />
      <SponsorsSection />
      <DispatchSection />
      <Footer />
    </>
  );
}

import React from 'react'
import TestimonialSection from '../components/TestimonialSection';
import Workflow from '../components/Join';
import Navbar from '../components/Navbar';
import AboutSection from '../components/About';
import HeroSection from '../components/hero';
import Footer from '../components/Footer';
import Faq12 from '../components/FAQ';

function HeroPage() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <Workflow />
    <TestimonialSection />
    <Faq12 />
    <Footer />
    </>
  )
}

export default HeroPage
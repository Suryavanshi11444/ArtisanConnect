import React from 'react'
import TestimonialSection from '../components/TestimonialSection';
import Workflow from '../components/Join';
import Navbar from '../components/Navbar';
import AboutSection from '../components/About';
import HeroSection from '../components/hero';

function HeroPage() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <Workflow />
    <TestimonialSection />
    </>
  )
}

export default HeroPage
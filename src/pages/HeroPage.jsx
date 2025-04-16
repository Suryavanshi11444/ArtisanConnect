import React from 'react'
import TestimonialSection from '../components/sections/TestimonialSection';
import Workflow from '../components/sections/Join';
import Navbar from '../components/common/Navbar';
import AboutSection from '../components/sections/About';
import HeroSection from '../components/sections/hero';
import Footer from '../components/common/Footer';
import Faq12 from '../components/sections/FAQ';

function HeroPage() {
  return (
    <>
   
    <HeroSection />
    <AboutSection />
    <Workflow />
    <TestimonialSection />
    <Faq12 />
    
    </>
  )
}

export default HeroPage
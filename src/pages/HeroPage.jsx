import React from 'react'
import TestimonialSection from '../components/sections/TestimonialSection';
import Workflow from '../components/sections/Workflow';
import Navbar from '../components/common/Navbar';
import AboutSection from '../components/sections/About';
import HeroSection from '../components/sections/hero';
import Footer from '../components/common/Footer';
import Faq12 from '../components/sections/FAQ';
import JoinUsPage from '../components/sections/Join';

function HeroPage() {
  return (
    <>
   
    <HeroSection />
    <AboutSection />
    <Workflow />
    <TestimonialSection />
    <Faq12 />
    <JoinUsPage />
    
    </>
  )
}

export default HeroPage
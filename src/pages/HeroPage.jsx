import React from 'react'
import TestimonialSection from '../components/sections/TestimonialSection';
import Workflow from '../components/sections/Workflow';
import Navbar from '../components/common/Navbar';
import  ImpactSection from '../components/sections/About';
import HeroSection from '../components/sections/hero';
import Footer from '../components/common/Footer';
import Faq12 from '../components/sections/FAQ';
import Mainfeature from '../components/sections/Mainfeature';

function HeroPage() {
  return (
    <>
   
    <HeroSection />
    <ImpactSection />
    <Mainfeature/>
    <Workflow />
    <TestimonialSection />
    <Faq12 />

    
    
    </>
  )
}

export default HeroPage
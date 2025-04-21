import React from 'react'
import TestimonialSection from '../components/sections/TestimonialSection';
import Workflow from '../components/sections/Workflow';

import  AboutSection from '../components/sections/About';
import HeroSection from '../components/sections/hero';

import Faq12 from '../components/sections/FAQ';
import Mainfeature from '../components/sections/Mainfeature'


function HeroPage() {
  return (
    <>
   
    <HeroSection />
    <AboutSection />
    <Workflow />
   <Mainfeature/> 
    <TestimonialSection />
    <Faq12 />

    
    
    </>
  )
}

export default HeroPage
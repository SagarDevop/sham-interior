import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import VideoSection from '../components/VideoSection';
import Stats from '../components/Stats';
import Process from '../components/Process';
import DesignConsultation from '../components/DesignConsultation';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (Wide with compact height) */}
      <Hero />

      {/* 2. About / Introduction Section (max-w-[1050px]) */}
      <About />

      {/* 3. Latest Project Showcase (max-w-[1050px]) */}
      <Projects />

      {/* 4. Speciality Services Section (Full Width beige band) */}
      <Services />

      {/* 5. Cinematic Video Section (Full Width photographic band) */}
      <VideoSection />

      {/* 6. Statistics Strip (Full Width clean white band) */}
      <Stats />

      {/* 7. Process Methodology */}
      <Process />

      {/* 8. Interior Design Consultation & Service Tiers */}
      <DesignConsultation />

      {/* 9. Client Testimonial & Atmosphere */}
      <Testimonial />
    </>
  );
}

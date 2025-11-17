'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import ParticleField from './components/ParticleField';
import QuoteEstimator from './components/QuoteEstimator';
import HeroSimulation from './components/HeroSimulation';
import Testimonials from './components/Testimonials';
import LoginDropdown from './components/LoginDropdown';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Parallax background effect
    gsap.to('.parallax-bg', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-gray-950 text-white">
      {/* Parallax background layer */}
      <div className="parallax-bg absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-10 -z-10"></div>

      {/* Page Sections */}
      <main className="space-y-0">
        <ParticleField /> 
        
        <Hero />
        
        <HeroSimulation />
        <Services />
        <QuoteEstimator />
        <Testimonials />
        <About />
        <Contact />
        
      </main>

      <Footer />
      <ChatbotWidget />

      <div className="absolute bottom-4 w-full text-center text-gray-500 text-sm">
        
      </div>
    </div>
  );
}

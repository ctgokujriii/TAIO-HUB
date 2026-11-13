'use client';

import Hero from './components/Hero';
import Services from './components/ServicesHome';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import LatestUpdates from './components/LatestUpdates';
import Contact from './components/Contact';
import ChatbotWidget from './components/ChatbotWidget';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <LatestUpdates />
      <Contact />
      <ChatbotWidget />
    </div>
  );
}

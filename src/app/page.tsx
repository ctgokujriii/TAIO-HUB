'use client';

import Hero from './components/Hero';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatbotWidget from './components/ChatbotWidget';

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Hero />
      <Work limit={4} showAllLink />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <ChatbotWidget />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ryan Gelade',
      text: 'Fantastic experience! The support team was fast and professional. Highly recommend their service.',
      role: 'Manager, Happicabs',
    },
    {
      name: 'Sarah Ahmed',
      text: 'They truly understand the taxi industry — everything from bookings to dispatching was seamless.',
      role: 'Operations Lead, UK Cabs',
    },
    {
      name: 'Michael Brown',
      text: 'Excellent response times and very polite agents. Our customers are more satisfied than ever!',
      role: 'Owner, MetroCars',
    },
  ];

  // Manual navigation
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          What Our Clients Say
        </h2>

        {/* Testimonial Card */}
        <div className="overflow-hidden bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Quote className="w-10 h-10 mx-auto text-purple-300 mb-6" />
              <p className="text-lg md:text-xl italic text-gray-200 mb-6 leading-relaxed">
                “{testimonials[index].text}”
              </p>
              <h3 className="text-xl font-bold text-white">{testimonials[index].name}</h3>
              <p className="text-sm text-gray-400">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons Below */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={prev}
            className="bg-white/20 hover:bg-white/30 px-5 py-3 rounded-full transition flex items-center gap-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline"></span>
          </button>
          <button
            onClick={next}
            className="bg-white/20 hover:bg-white/30 px-5 py-3 rounded-full transition flex items-center gap-2"
            aria-label="Next testimonial"
          >
            <span className="hidden sm:inline"></span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

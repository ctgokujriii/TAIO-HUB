'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rachel Dale',
      role: 'Director at Swanlands Consultancy',
      text: `Working with Ali has been genuinely smooth. He responds quickly, stays professional, and handles everything properly without needing to be chased. You always know the job will be done right when he’s involved.`,
      logo: '/SC Logo.PNG',
    },
    {
      name: 'Ryan Gelade',
      role: 'Manager at Happicabs Chelmsford',
      text: `Ali has been great to work with. He’s reliable, easy to communicate with, and consistently keeps things running without issues. The service has been steady, professional, and always up to standard.`,
      logo: '/HC Logo.PNG',
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

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

          {/* LOGO WATERMARK (unique per testimonial) */}
          <div className="pointer-events-none absolute inset-0 opacity-10 flex items-center justify-center">
            <div
              className="w-2/3 h-2/3 bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url('${testimonials[index].logo}')`,
              }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
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

        {/* Buttons */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={prev}
            className="bg-white/20 hover:bg-white/30 px-5 py-3 rounded-full transition flex items-center gap-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="bg-white/20 hover:bg-white/30 px-5 py-3 rounded-full transition flex items-center gap-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client'; // Important for Next.js App Router

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const benefits = [
  { icon: '💰', title: 'Cost Savings', desc: 'Up to 80%* reduction in operational costs.' },
  { icon: '🔒', title: 'Reliability', desc: '99.9% uptime with redundant systems.' },
  { icon: '⏰', title: '24/7 Service', desc: 'Round-the-clock support, no exceptions.' },
];

const About = () => {
  useEffect(() => {
    // Register plugin
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const icons = gsap.utils.toArray<HTMLElement>('.benefit-icon');
icons.forEach((el, i) => {
  gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            onEnter: () => gsap.to(el, { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 }),
            onEnterBack: () => gsap.to(el, { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 }),
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-blue-900/20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 font-poppins"
      >
        Why TAIO Hub?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-gray-800 rounded-lg font-poppins"
          >
            <motion.div
              className="benefit-icon text-4xl mb-4 inline-block"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            >
              {benefit.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

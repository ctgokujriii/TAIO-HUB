// components/Footer.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const Footer = () => {
  const controls = useAnimation();

  // This is the correct & only way to silence the warning permanently
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
      {/* ← this replaces whileInView */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* Legal Links */}
        <div className="mb-8 space-x-8 text-sm md:text-base">
          <Link
            href="/privacy"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Terms of Service
          </Link>
          <Link
            href="/#contact"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          {['Facebook', 'Twitter', 'LinkedIn'].map((social) => {
            const icon = social === 'Facebook' ? '📘' : social === 'Twitter' ? '🐦' : '💼';

            return (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.4, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-3xl text-gray-400 hover:text-blue-400"
                aria-label={social}
              >
                {icon}
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm leading-relaxed">
          Made with ❤️ by the TAIO Hub Team
          <br />
          © 2025 TAIO Hub. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
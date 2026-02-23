// components/Footer.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const controls = useAnimation();

  // This is the correct & only way to silence the warning permanently
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  // Social Media Configuration
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61587934127231',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/TAIO_Hub',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/taio.hub/',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/taio-hub/', // <-- Update this URL!
    },
  ];

  return (
    <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800 relative z-50">
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
            href="/contact" // <-- Updated to point to your new contact page
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-8 h-8" />
            </motion.a>
          ))}
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
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for glassmorphism transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 hover:opacity-80 transition-opacity">
          TAIO Hub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-500 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            );
          })}
          
          <Link
            href="/quote"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-95"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950 border-b border-gray-800 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between text-lg font-semibold border-b border-gray-900 pb-3 transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronRight className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-gray-600'}`} />
                  </Link>
                );
              })}
              
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';  

export default function LoginDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown if user clicks outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <Button
        variant="outline"
        className="bg-gray-900 text-white hover:bg-gray-800"
        onClick={() => setOpen(!open)}
      >
        Login
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 rounded-2xl bg-gray-800 shadow-lg border border-gray-700 p-4 z-50"
          >
            <form className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Login 
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

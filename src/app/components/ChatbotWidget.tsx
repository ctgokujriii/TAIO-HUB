'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 font-poppins"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        💬
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="fixed bottom-24 right-6 w-80 bg-gray-800 rounded-lg p-4 shadow-xl z-50 font-poppins"
          >
            <h3 className="text-white font-semibold mb-2">Chatbot Placeholder</h3>
            <p className="text-gray-300 mb-4">This is a non-functional demo. Integrate your real chatbot here!</p>
            <motion.button
              whileHover={{ scale: 0.98 }}
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
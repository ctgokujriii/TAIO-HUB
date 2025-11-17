import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="py-8 px-4 bg-gray-800 text-center border-t border-gray-700">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-x-4 mb-4"
    >
      <a 
        href="#" 
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        aria-label="Privacy Policy"
      >
        Privacy
      </a>
      <a 
        href="#" 
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        aria-label="Terms of Service"
      >
        Terms
      </a>
      <a 
        href="#" 
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        aria-label="Contact Us"
      >
        Contact
      </a>
    </motion.div>
    <div className="flex justify-center space-x-4 flex-wrap gap-2 mb-4">
      {['Facebook', 'Twitter', 'LinkedIn'].map((social, i) => {
        const icon = social === 'Facebook' ? '📘' : social === 'Twitter' ? '🐦' : '💼';
        const ariaLabel = `${social} Profile`;
        const href = '#';  // Replace with real URLs, e.g., 'https://facebook.com/taiohub'
        
        return (
          <motion.a
            key={social}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
            href={href}
            aria-label={ariaLabel}
          >
            {icon}
          </motion.a>
        );
      })}
    </div>
    <p className="text-gray-400 text-sm">
      Made with ❤️ by the TAIO Hub Team.
      <br />
      © 2025 TAIO Hub. All rights reserved.
    </p>
  </footer>
);

export default Footer;
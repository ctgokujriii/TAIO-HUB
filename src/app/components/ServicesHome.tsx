'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CalendarDays, 
  Users, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

// We only need the top 3 for the homepage teaser
const topServices = [
  { 
    title: 'Free 3 Day Trial', 
    desc: '3 days of a week. You choose what days & what times. We cover it. If you love it, we move forwards.',
    icon: CalendarDays 
  },
  { 
    title: 'Experienced Staff', 
    desc: 'Our team has Telephonists and Dispatchers with years of industry experience.',
    icon: Users 
  },
  { 
    title: 'Professional & Reliable Support', 
    desc: '24/7 availability, with multiple backups, in order to serve all your dispatch needs.',
    icon: ShieldCheck 
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Core Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to scale your dispatch operations smoothly and efficiently.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {topServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.03, translateY: -5 }} 
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors shadow-lg">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            href="/services" 
            className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
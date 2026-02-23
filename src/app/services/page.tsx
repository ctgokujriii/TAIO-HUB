'use client';

import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  Users, 
  ShieldCheck, 
  FileText, 
  LayoutDashboard, 
  Settings 
} from 'lucide-react';

// Added Lucide icons to perfectly match each service offering
const services = [
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
  },
  { 
    title: 'Free Add-on', 
    desc: 'We provide performance & quality reports for all of our agents working with you.',
    icon: FileText 
  },
  { 
    title: 'Modern Feel', 
    desc: 'You get your own dedicated login page, with a statistics sheet and all reports centered on one page.',
    icon: LayoutDashboard 
  },
  { 
    title: 'Custom Plans', 
    desc: 'We tailor each plan to your exact needs and requirements. You only pay for what you need.',
    icon: Settings 
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative bg-gray-950 text-white overflow-hidden">
      {/* Background layer for consistency with the rest of the site */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive outsourcing solutions tailored specifically for the taxi and dispatch industry.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.03, translateY: -5 }} 
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl cursor-pointer border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle gradient glow effect on hover */}
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
      </div>
    </main>
  );
}
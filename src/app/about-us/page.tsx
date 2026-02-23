'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Zap, 
  Globe2, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Lightning Response',
    desc: 'In the taxi world, seconds matter. We maintain a sub-10 second average answer time across all global regions.'
  },
  {
    icon: ShieldCheck,
    title: 'Unwavering Reliability',
    desc: 'With triple-redundant power and internet backups, your dispatch operations never go dark.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    desc: 'We don’t just take calls; we help you scale. Our data reports identify peak times and missed opportunities.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative bg-gray-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-5 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4"
          >
            <div className="h-[2px] w-8 bg-cyan-400" /> The TAIO Hub Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            We handle the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">noise</span>,<br /> 
            so you can handle the <span className="text-white">growth</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed max-w-2xl"
          >
            TAIO Hub was born out of a simple observation: taxi and dispatch owners spend too much time managing staff and not enough time expanding their fleet. We built a global, 24/7 command center to change that.
          </motion.p>
        </div>

        {/* BENTO GRID STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <motion.div 
            whileHover={{ translateY: -5 }}
            className="md:col-span-2 bg-gray-900/50 backdrop-blur-md border border-gray-800 p-10 rounded-3xl flex flex-col justify-between"
          >
            <div className="bg-cyan-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
              <Globe2 size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Global Infrastructure</h3>
              <p className="text-gray-400 text-lg">
                Operating across the UK, USA, Canada, Australia, and New Zealand. Our localized knowledge ensures our telephonists speak your language and understand your geography.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ translateY: -5 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-blue-900/20"
          >
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6">
              <Clock size={24} />
            </div>
            <div className="text-white">
              <div className="text-5xl font-black mb-2">24/7</div>
              <p className="font-bold opacity-80 uppercase tracking-wider text-sm">Always Online</p>
              <p className="mt-4 opacity-90">
                We never sleep. Your customers get the same professional service at 3 PM as they do at 3 AM.
              </p>
            </div>
          </motion.div>
        </div>

        {/* OUR VALUES */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Driven by Performance</h2>
          <p className="text-gray-400 max-w-xl mx-auto italic">"Outsourcing shouldn't feel like a compromise. It should feel like an upgrade."</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group"
            >
              <val.icon className="w-10 h-10 text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-3">{val.title}</h4>
              <p className="text-gray-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FINAL CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 border border-cyan-500/20 rounded-[3rem] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to unlock <span className="text-cyan-400">capacity?</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            Join the hundreds of dispatch firms that have reclaimed their time and increased their booking volume with TAIO Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button 
               onClick={() => window.location.href = '/quote'}
               className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-cyan-500/20 transition-all"
            >
              Calculate Your Savings
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-gray-800 hover:bg-gray-700 text-white px-10 py-4 rounded-full font-bold text-lg border border-gray-700 transition-all"
            >
              Contact Sales
            </button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
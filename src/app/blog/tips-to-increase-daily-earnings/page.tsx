'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, Clock, User, ChevronLeft, 
  Banknote, MapPin, Star, Sparkles, 
  Smartphone, Fuel, Users 
} from 'lucide-react';

const tips = [
  {
    icon: Clock,
    title: "Work During Peak Hours",
    desc: "The best time to earn more is during busy hours. Early mornings, office rush hours, weekends, and late nights usually have higher demand. Airport runs and special events can also bring more trips in a short time."
  },
  {
    icon: MapPin,
    title: "Choose High-Demand Locations",
    desc: "Stay near places where people often need rides. Being in the right location reduces waiting time between trips.",
    list: ["Airports", "Train or bus stations", "Shopping centers", "Hotels", "Business districts"]
  },
  {
    icon: Star,
    title: "Provide Excellent Customer Service",
    desc: "Be polite, keep your vehicle clean, and drive safely. Small things like helping with luggage can make a big difference. Happy passengers are more likely to tip you, leave good reviews, and call you again for future rides."
  },
  {
    icon: Sparkles,
    title: "Keep Your Vehicle Clean and Well-Maintained",
    desc: "A clean and comfortable car attracts repeat customers. Regular maintenance also prevents breakdowns that could cost you time and money."
  },
  {
    icon: Smartphone,
    title: "Use Technology Smartly",
    desc: "If your company uses a dispatch system or app, stay active and respond quickly to ride requests. Faster response times often mean more trips."
  },
  {
    icon: Fuel,
    title: "Reduce Fuel Costs",
    desc: "Fuel is one of the biggest expenses. Drive smoothly, avoid unnecessary idling, and plan routes efficiently to save fuel and increase your profit."
  },
  {
    icon: Users,
    title: "Build Regular Customers",
    desc: "Give business cards to frequent passengers. Airport travelers, office workers, and hotel guests may prefer to call a trusted driver directly."
  }
];

export default function TipsForDriversPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-gray-950 text-white relative selection:bg-green-500/30">
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-12 group font-semibold">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
        </Link>

        <header className="mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold tracking-wider uppercase">
              Driver Guides
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Tips for Taxi Drivers to Increase Daily Earnings
          </motion.h1>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-6 text-gray-400 border-b border-gray-800 pb-8">
            <div className="flex items-center gap-2"><User size={18} className="text-green-400" /> Fleet Management</div>
            <div className="flex items-center gap-2"><Calendar size={18} /> Mar 05, 2026</div>
            <div className="flex items-center gap-2"><Clock size={18} /> 4 min read</div>
          </motion.div>
        </header>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-gray-800 shadow-2xl relative">
          <img src="/digitalgrid.png" alt="Technology and Efficiency" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
        </motion.div>

        <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-8 font-light">
          
          <p className="mb-12 text-xl text-gray-200 font-medium">
            Driving a taxi can be a steady and rewarding job. However, to increase your daily earnings, you need smart planning and good customer service. Here are some simple, actionable tips that can help you earn more each day.
          </p>

          <div className="space-y-6">
            {tips.map((tip, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl hover:border-green-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center text-green-400 shadow-lg">
                    <tip.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="text-green-500/50 text-xl font-mono">0{index + 1}.</span> 
                      {tip.title}
                    </h3>
                    <p className="text-gray-300">{tip.desc}</p>
                    
                    {tip.list && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {tip.list.map(item => (
                          <span key={item} className="px-3 py-1 bg-gray-950 border border-gray-800 rounded-full text-sm text-gray-400">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <section className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 p-8 md:p-12 rounded-3xl text-center mt-16 relative overflow-hidden">
            <Banknote className="w-12 h-12 text-green-400 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Final Thoughts</h3>
            <p className="text-gray-300 relative z-10 max-w-2xl mx-auto text-xl">
              Increasing daily earnings is not just about driving more hours — it’s about <strong className="text-white">driving smarter</strong>. By working during peak times, choosing good locations, offering great service, and managing expenses wisely, taxi drivers can boost their income consistently.
            </p>
          </section>

        </div>
      </article>
    </main>
  );
}
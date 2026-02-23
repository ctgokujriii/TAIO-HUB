'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, Clock, User, ChevronLeft, 
  Globe2, AlertTriangle, Headset, Heart, 
  TrendingUp, ShieldCheck 
} from 'lucide-react';

export default function RoleOfTaxisInternationalPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-gray-950 text-white relative selection:bg-cyan-500/30">
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-12 group font-semibold">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
        </Link>

        <header className="mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-wider uppercase">
              Global Insights
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            The Role of Taxis in the International World
          </motion.h1>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-6 text-gray-400 border-b border-gray-800 pb-8">
            <div className="flex items-center gap-2"><User size={18} className="text-blue-400" /> TAIO Editorial</div>
            <div className="flex items-center gap-2"><Calendar size={18} /> Mar 02, 2026</div>
            <div className="flex items-center gap-2"><Clock size={18} /> 5 min read</div>
          </motion.div>
        </header>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-gray-800 shadow-2xl relative">
          <img src="/officesetting.png" alt="Global Operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
        </motion.div>

        <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-12 font-light">
          
          <section>
            <p className="mb-6 text-xl text-gray-200 font-medium">
              The taxi industry plays a crucial role in the global transportation system. In cities across continents—from major financial hubs to small tourist destinations—taxis provide flexible, door-to-door mobility that supports daily life, travel, healthcare access, and business operations. Unlike fixed public transport routes, taxis offer personalised travel, making them an essential service in both developed and developing countries.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe2 className="text-blue-400" size={32} /> Importance of Taxis Worldwide
            </h2>
            <p>
              Internationally, taxis are vital because they ensure 24/7 transportation, connect airports to cities, support tourism, and help people reach workplaces, schools, and hospitals. In many countries, taxis act as a bridge where public transport is limited or overcrowded. They also generate millions of jobs globally, contributing significantly to local and national economies. For tourists and international visitors, taxis often represent the first impression of a city, making professionalism and safety extremely important.
            </p>
          </section>

          <section className="bg-red-900/10 border border-red-500/20 rounded-3xl p-8 md:p-10 my-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-red-400" size={28} /> Current Challenges Facing the Industry
            </h2>
            <p className="mb-6">
              Today, the global taxi industry faces several challenges. Rising fuel prices, higher insurance premiums, and strict government regulations are increasing operational costs. 
            </p>
            <p>
              Competition from ride-hailing apps and digital mobility platforms has transformed customer expectations, pushing traditional operators to adopt new technologies. Driver shortages, safety concerns, and environmental pressures to switch to electric vehicles also add to the complexity of operating in the modern transport market.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <Headset className="text-cyan-400" size={32} /> Benefits of Outsourcing
            </h2>
            <p className="mb-6">
              Outsourcing has become an effective strategy for taxi businesses worldwide. By outsourcing services such as call centres, dispatch management, IT support, and accounting, companies can reduce expenses and improve efficiency. 
            </p>
            <blockquote className="border-l-4 border-cyan-500 bg-cyan-900/10 p-8 rounded-r-2xl my-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
              <p className="text-xl text-cyan-50 italic font-medium relative z-10">
                "Outsourcing allows operators to provide 24/7 booking services without increasing internal staffing costs. It helps smaller taxi firms compete with large multinational ride-hailing corporations by improving professionalism, response time, and customer service quality."
              </p>
            </blockquote>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <Heart className="text-pink-400" size={32} /> Supporting Vulnerable Passengers
            </h2>
            <p className="mb-8">
              Taxis are especially important for vulnerable groups. For women, safe and reliable taxis provide confidence when travelling at night or alone. For children, taxis offering approved child safety seats ensure secure school or medical transport. Patients rely on taxis for hospital visits, particularly when ambulance services are not required. Elderly passengers benefit from door-to-door service, assistance with mobility, and patient, trained drivers who understand their needs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {['GPS tracking & Panic buttons', 'Verified driver identification', 'In-car CCTV systems', 'App-based live sharing', 'First aid training', 'Disability awareness'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                  <ShieldCheck className="text-pink-400 shrink-0" size={20} />
                  <span className="text-gray-200 font-medium text-base">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-blue-400" size={32} /> Women Empowerment
            </h2>
            <p>
              An inspiring global trend is the rise of women taxi drivers. In many countries, women are joining the taxi profession not only to earn an independent income but also to create safer travel options for female passengers. Women-driven taxi services have gained popularity because they provide comfort and reassurance to women and children. This shift promotes gender equality, challenges traditional stereotypes, and empowers women economically and socially. By supporting female drivers, the taxi industry contributes to women’s empowerment while enhancing passenger safety.
            </p>
          </section>

          <section className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 p-8 md:p-12 rounded-3xl text-center mt-16 relative overflow-hidden">
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Conclusion</h3>
            <p className="text-gray-300 relative z-10 max-w-3xl mx-auto">
              The international taxi industry remains a key pillar of global mobility. Although it faces economic, technological, and regulatory challenges, it continues to adapt and evolve. Through smart outsourcing, improved safety measures, and the growing participation of women drivers, taxis are becoming more inclusive, efficient, and secure. As cities grow and transportation needs increase, taxis will continue to play an essential role in connecting people safely and reliably across the world.
            </p>
          </section>

        </div>
      </article>
    </main>
  );
}
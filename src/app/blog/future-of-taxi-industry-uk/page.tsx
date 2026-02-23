'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, Clock, User, ChevronLeft, 
  ShieldCheck, Users, Zap, MapPin, 
  TrendingUp, CheckCircle2 
} from 'lucide-react';

export default function FutureOfTaxiIndustryPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-gray-950 text-white relative selection:bg-cyan-500/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Navigation */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-12 group font-semibold"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Insights
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-wider uppercase">
              Industry Trends
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
          >
            Moving Forward Together: The Future of the Taxi Industry in the United Kingdom
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-400 border-b border-gray-800 pb-8"
          >
            <div className="flex items-center gap-2"><User size={18} className="text-cyan-400" /> TAIO Editorial</div>
            <div className="flex items-center gap-2"><Calendar size={18} /> Feb 23, 2026</div>
            <div className="flex items-center gap-2"><Clock size={18} /> 6 min read</div>
          </motion.div>
        </header>

        {/* Hero Image - UPDATED TO LOCAL PATH */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-gray-800 shadow-2xl relative"
        >
          <img 
            src="/londontaxi.jpg" 
            alt="London Black Cab" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Article Content */}
        <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-12 font-light">
          
          {/* Section 1: Importance */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <MapPin className="text-cyan-400" size={32} /> 
              The Importance of the Taxi Industry
            </h2>
            <p className="mb-6">
              At our taxi company, we understand that the taxi industry is a vital part of everyday life across the United Kingdom. From traditional black cabs in busy metropolitan centres to private hire vehicles serving towns and rural communities, taxis provide dependable door-to-door transport for millions of people.
            </p>
            <p>
              However, the industry is currently facing significant challenges, including rising fuel and insurance costs, strict regulatory requirements, increased competition from ride-hailing platforms, and driver shortages in certain regions. Despite these pressures, we remain committed to delivering reliable, high-quality service to our customers.
            </p>
          </section>

          {/* Section 2: Communities */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="text-cyan-400" size={32} /> 
              Keeping Communities Connected
            </h2>
            <p className="mb-6">
              Taxis play an essential role in keeping communities connected. We operate 24 hours a day, 7 days a week, ensuring that passengers can travel safely at any time. Our services are particularly important for individuals who do not own private vehicles or cannot use public transport.
            </p>
            
            <blockquote className="border-l-4 border-cyan-500 bg-cyan-900/10 p-8 rounded-r-2xl my-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
              <p className="text-2xl text-cyan-50 italic font-medium relative z-10 leading-snug">
                "Late-night journeys help reduce drink-driving incidents by offering a safe alternative. In rural areas—where bus and train services may be limited—taxis often serve as a lifeline."
              </p>
            </blockquote>
            
            <p>
              Beyond transportation, our industry supports local economies by creating employment opportunities and providing essential mobility for residents, businesses, and visitors.
            </p>
          </section>

          {/* Section 3: Smart Strategies */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="text-cyan-400" size={32} /> 
              Adapting Through Smart Strategies
            </h2>
            <p className="mb-6">
              To remain competitive and efficient, many taxi companies, including ours, strategically outsource certain support services such as call handling, dispatch system management, customer support, and accounting.
            </p>
            <p>
              This approach allows us to reduce operational costs while maintaining round-the-clock booking availability. By streamlining administrative functions, we can focus more on what truly matters: <strong className="text-white font-semibold">delivering excellent service, supporting our drivers, and ensuring customer satisfaction.</strong>
            </p>
          </section>

          {/* Section 4: Safety */}
          <section className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 my-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="text-cyan-400" size={32} /> 
              Safety and Accessibility at the Core
            </h2>
            <p className="mb-8">
              Safety and accessibility are at the heart of our operations. We are committed to making our services safe, easy, and supportive for women, children, patients, and elderly passengers. Our vehicles are equipped with:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {['GPS tracking systems', 'Emergency panic buttons', 'In-car CCTV systems'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-gray-950/50 p-4 rounded-xl border border-gray-800">
                  <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="mb-6">
              All drivers undergo strict background checks and licensing procedures. Where possible, we offer female driver options upon request and provide wheelchair-accessible vehicles and child safety seats. Additionally, we invest in driver training programmes that include:
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span>First aid certification</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span>Disability awareness training</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span>Customer care and safeguarding practices</span>
              </li>
            </ul>
            
            <p className="mt-8 text-cyan-200 font-medium">
              These measures ensure that vulnerable passengers feel secure, respected, and valued throughout their journey.
            </p>
          </section>

          {/* Section 5: Women Empowerment */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-cyan-400" size={32} /> 
              Women Empowerment in the Taxi Industry
            </h2>
            <p className="mb-6">
              Women are playing an increasingly important role in the taxi industry, breaking traditional barriers and establishing themselves as confident, skilled, and independent professionals.
            </p>
            <p className="mb-6">
              More women are joining the industry as licensed drivers, dispatch operators, and managerial staff. By becoming taxi drivers, women are gaining financial independence, flexible working hours, and career stability. This empowers them to support their families, build their futures, and grow as strong, self-reliant individuals.
            </p>
            <p className="mb-8">
              Female drivers also provide reassurance to many passengers—particularly women and children—who may feel more comfortable choosing a female driver option. As the industry evolves, we actively encourage and support women to join our workforce by offering:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Flexible shift patterns', 'Professional training and licensing guidance', 'Safe working environments', 'Equal earning opportunities'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-gradient-to-r from-blue-900/20 to-transparent p-4 rounded-xl border-l-2 border-blue-500">
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p>
              By promoting inclusivity and gender diversity, we are not only strengthening our company but also contributing to broader social progress. Women in the taxi industry are proving that transportation is not limited by gender—it is a profession built on skill, responsibility, and dedication.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 p-8 md:p-12 rounded-3xl text-center mt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover opacity-10 mix-blend-overlay" />
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Our Vision for the Future</h3>
            <p className="text-gray-300 mb-8 relative z-10 max-w-3xl mx-auto">
              As the industry continues to evolve, our mission remains clear: to provide a safe, inclusive, and dependable transport service for everyone. By embracing technology, improving safety standards, empowering women, and prioritising customer needs, we aim to strengthen trust in taxi services and continue serving our communities with professionalism and care.
            </p>
            <p className="text-2xl font-bold text-cyan-400 relative z-10">
              Together, we are driving the future of the taxi industry forward.
            </p>
          </section>

        </div>

        {/* Footer CTA */}
        <footer className="mt-20 pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="font-bold text-white mb-2 text-2xl">Ready to optimize your dispatch?</h4>
            <p className="text-gray-400 text-lg">See how much you could save with our custom outsourcing solutions.</p>
          </div>
          <Link 
            href="/quote"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap"
          >
            Calculate Savings
          </Link>
        </footer>

      </article>
    </main>
  );
}
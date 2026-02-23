'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useAnimation, animate, Variants } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell
} from 'recharts';
import { MapPin, Users, Headset, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

// --- CONFIGURATION ---
// Adjusted coordinates (top/left) so the nodes are well-spaced and don't overlap
const COUNTRY_CONFIG: Record<string, { name: string; currency: string; roleName: string; csrRate: number; dispatcherRate: number; top: string; left: string }> = {
  CAN: { name: 'Canada', currency: 'CA$', roleName: 'Customer Services', csrRate: 4.5, dispatcherRate: 5.5, top: '25%', left: '15%' },
  USA: { name: 'USA', currency: '$', roleName: 'Customer Services', csrRate: 4.0, dispatcherRate: 5.0, top: '48%', left: '22%' },
  UK: { name: 'UK', currency: '£', roleName: 'Telephonists', csrRate: 4.5, dispatcherRate: 5.5, top: '30%', left: '48%' },
  AUS: { name: 'Australia', currency: 'A$', roleName: 'Customer Services', csrRate: 4.5, dispatcherRate: 5.5, top: '70%', left: '72%' },
  NZ: { name: 'New Zealand', currency: 'NZ$', roleName: 'Customer Services', csrRate: 5.0, dispatcherRate: 6.0, top: '85%', left: '88%' },
};

const IN_HOUSE_DIVISOR = 0.25;
type Timeframe = 'hourly' | 'monthly' | 'annually';

// --- CUSTOM ANIMATED NUMBER COMPONENT ---
const AnimatedNumber = ({ value, currency = '', isPercent = false }: { value: number, currency?: string, isPercent?: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v: number) => setDisplayValue(v),
    });
    return () => controls.stop();
  }, [value]); 

  return (
    <span>
      {currency}
      {displayValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      {isPercent ? '%' : ''}
    </span>
  );
};

// --- CUSTOM PARTICLE BURST (CONFETTI) ---
const ParticleBurst = () => {
  const particles = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible z-50">
      {particles.map((_, i) => {
        const angle = (i / particles.length) * 360;
        const distance = Math.random() * 200 + 100;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: Math.random() * 1.5 + 0.5,
              x: Math.cos(angle * (Math.PI / 180)) * distance,
              y: Math.sin(angle * (Math.PI / 180)) * distance,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute w-3 h-3 rounded-full ${Math.random() > 0.5 ? 'bg-cyan-400' : 'bg-blue-500'}`}
          />
        );
      })}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function QuoteEstimatorPage() {
  const router = useRouter();
  
  // State
  const [step, setStep] = useState<number>(0); 
  const [countryKey, setCountryKey] = useState<string>('');
  const [csrCount, setCsrCount] = useState<number>(0);
  const [dispatcherCount, setDispatchersCount] = useState<number>(0);
  const [timeframe, setTimeframe] = useState<Timeframe>('monthly');

  // Math Logic
  const config = countryKey ? COUNTRY_CONFIG[countryKey] : COUNTRY_CONFIG['UK']; 
  const currentMultiplier = timeframe === 'monthly' ? 160 : timeframe === 'annually' ? 1920 : 1;
  
  const totalWithUs = (csrCount * config.csrRate) + (dispatcherCount * config.dispatcherRate);
  const totalInHouse = totalWithUs > 0 ? totalWithUs / IN_HOUSE_DIVISOR : 0;
  const savings = totalInHouse - totalWithUs;
  const percentSaved = totalInHouse > 0 ? (savings / totalInHouse) * 100 : 0;

  // Cinematic Step Variants (Typed to satisfy TypeScript)
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.3 } }
  };

  const handleOtherClick = () => {
    const message = "I am looking for taxi outsourcing services from a location outside of the 5 above mentioned -- Your message here";
    router.push(`/contact?message=${encodeURIComponent(message)}`);
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-950 text-white overflow-hidden relative selection:bg-cyan-500/30">
      {/* Background Particles/Grid */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-cover bg-fixed opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
        
        {/* ================= LEFT SIDE: INTERACTIVE COMMAND CENTER ================= */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center min-h-[60vh] lg:min-h-[80vh]">
          <AnimatePresence mode="wait">
            
            {/* STEP 0: THE GLOBAL NODE MAP */}
            {step === 0 && (
              <motion.div key="step0" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Select Global Region</h1>
                <p className="text-gray-400 text-lg mb-8">Establish your operational base to calibrate localized rates.</p>
                
                <div className="relative w-full aspect-video bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  
                  {Object.entries(COUNTRY_CONFIG).map(([key, data]) => (
                    // WRAPPER DIV: Handles positioning and translating safely
                    <div 
                      key={key} 
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{ top: data.top, left: data.left }}
                    >
                      {/* MOTION BUTTON: Handles the hover scaling smoothly */}
                      <motion.button
                        onClick={() => { setCountryKey(key); setStep(1); }}
                        className="group flex flex-col items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="relative flex items-center justify-center w-12 h-12">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20 group-hover:animate-ping" />
                          <div className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] border-2 border-white" />
                        </div>
                        <span className="mt-1 px-3 py-1 bg-gray-900/80 backdrop-blur-md rounded-md border border-cyan-500/30 text-sm font-bold shadow-lg opacity-80 group-hover:opacity-100 group-hover:border-cyan-400 transition-all whitespace-nowrap">
                          {data.name}
                        </span>
                      </motion.button>
                    </div>
                  ))}

                  {/* "Other" Radar Ping Container */}
                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ top: '65%', left: '50%' }}>
                    <motion.button
                      onClick={handleOtherClick}
                      className="group flex flex-col items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative flex items-center justify-center w-16 h-16">
                        <motion.div animate={{ scale: [1, 2], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute rounded-full border border-gray-500 w-full h-full" />
                        <div className="relative inline-flex rounded-full h-3 w-3 bg-gray-500" />
                      </div>
                      <span className="mt-1 px-3 py-1 bg-gray-900/80 rounded-md border border-gray-600 text-xs text-gray-400 group-hover:text-white transition-all whitespace-nowrap">
                        Other Region
                      </span>
                    </motion.button>
                  </div>

                </div>
              </motion.div>
            )}

            {/* STEP 1: GAMIFIED SLIDER - CSRs */}
            {step === 1 && (
              <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-xl">
                <div className="flex items-center gap-3 mb-2 text-cyan-400"><Headset /> <span className="font-semibold uppercase tracking-wider text-sm">Step 1 of 2</span></div>
                <h2 className="text-4xl font-bold mb-8">How many {config.roleName} do you need?</h2>
                
                <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <motion.div 
                      key={csrCount}
                      initial={{ scale: 1.2, color: '#fff' }}
                      animate={{ scale: 1, color: csrCount > 0 ? '#22d3ee' : '#fff' }}
                      className="text-7xl font-black tabular-nums"
                    >
                      {csrCount}
                    </motion.div>
                    <p className="text-gray-400 mt-2 font-medium">Operators Active</p>
                  </div>
                  
                  <input 
                    type="range" min="0" max="50" step="1" 
                    value={csrCount} 
                    onChange={(e) => setCsrCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
                  />
                  <div className="flex justify-between mt-3 text-sm text-gray-500 font-bold"><span>0</span><span>50+</span></div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full mt-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-cyan-500/25"
                  >
                    Configure Dispatchers <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => setStep(0)} className="w-full mt-4 text-gray-400 hover:text-white text-sm transition-colors">← Back to Map</button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: GAMIFIED SLIDER - DISPATCHERS */}
            {step === 2 && (
              <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-xl">
                <div className="flex items-center gap-3 mb-2 text-blue-400"><Users /> <span className="font-semibold uppercase tracking-wider text-sm">Step 2 of 2</span></div>
                <h2 className="text-4xl font-bold mb-8">How many Dispatchers are required?</h2>
                
                <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-blue-500/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <motion.div 
                      key={dispatcherCount}
                      initial={{ scale: 1.2, color: '#fff' }}
                      animate={{ scale: 1, color: dispatcherCount > 0 ? '#60a5fa' : '#fff' }}
                      className="text-7xl font-black tabular-nums"
                    >
                      {dispatcherCount}
                    </motion.div>
                    <p className="text-gray-400 mt-2 font-medium">Dispatchers Active</p>
                  </div>
                  
                  <input 
                    type="range" min="0" max="30" step="1" 
                    value={dispatcherCount} 
                    onChange={(e) => setDispatchersCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                  />
                  <div className="flex justify-between mt-3 text-sm text-gray-500 font-bold"><span>0</span><span>30+</span></div>

                  <button 
                    onClick={() => setStep(3)}
                    disabled={csrCount === 0 && dispatcherCount === 0}
                    className="w-full mt-10 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Initialize Analysis <ChevronRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => setStep(1)} className="w-full mt-4 text-gray-400 hover:text-white text-sm transition-colors">← Back to {config.roleName}</button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: THE BIG REVEAL CHART */}
            {step === 3 && (
              <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                <div className="flex items-center gap-3 mb-4 text-green-400"><CheckCircle2 /> <span className="font-semibold uppercase tracking-wider text-sm">Analysis Complete</span></div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Operational Savings</h2>
                <p className="text-gray-400 text-lg mb-10">Based on industry standards for {config.name}, here is your projected cost comparison.</p>
                
                <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-3xl border border-gray-800 shadow-2xl h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'Standard In-House', value: totalInHouse * currentMultiplier },
                      { name: 'TAIO Hub Solution', value: totalWithUs * currentMultiplier }
                    ]} margin={{ top: 40, right: 12, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" /><stop offset="100%" stopColor="#991b1b" /></linearGradient>
                        <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#047857" /></linearGradient>
                      </defs>
                      <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: '#9ca3af', fontWeight: 600 }} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }} contentStyle={{ backgroundColor: 'rgba(17,24,39,0.9)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '12px' }} formatter={(val: any) => `${config.currency}${Number(val).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`} />
                      <Bar dataKey="value" radius={[12, 12, 0, 0]} animationDuration={1500}>
                        { [0, 1].map((_, idx) => <Cell key={idx} fill={idx === 0 ? 'url(#redGrad)' : 'url(#greenGrad)'} />) }
                        <LabelList dataKey="value" position="top" fill="#fff" style={{ fontWeight: 800, fontSize: '1.1rem' }} formatter={(val: any) => `${config.currency}${Number(val).toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:0})}`} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <button onClick={() => setStep(0)} className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-colors">Start Over</button>
                  <button onClick={() => router.push('/contact')} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all text-center">
                    Claim This Rate
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ================= RIGHT SIDE: LIVE STICKY DASHBOARD ================= */}
        <div className="w-full lg:w-2/5 pb-12 lg:pb-0">
          <div className="sticky top-32 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
            
            {/* Confetti Explosion when reaching step 3 */}
            {step === 3 && <ParticleBurst />}

            <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
              <h3 className="text-xl font-bold flex items-center gap-2"><MapPin className="text-cyan-400" size={20}/> Live Receipt</h3>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs font-bold text-cyan-400 border border-gray-700 tracking-wider">
                {countryKey ? config.name : 'AWAITING REGION'}
              </span>
            </div>

            <div className="space-y-6">
              {/* Sliders breakdown */}
              <div className="flex justify-between items-center text-gray-300">
                <span>{config.roleName} ({csrCount})</span>
                <span className="font-mono">{config.currency}{(csrCount * config.csrRate * currentMultiplier).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span>Dispatchers ({dispatcherCount})</span>
                <span className="font-mono">{config.currency}{(dispatcherCount * config.dispatcherRate * currentMultiplier).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>

              {/* Timeframe Toggle */}
              <div className="bg-gray-950 rounded-xl p-1 flex mt-6 border border-gray-800">
                {(['hourly', 'monthly', 'annually'] as Timeframe[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${timeframe === t ? 'bg-gray-800 text-white shadow-md' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* The Math */}
              <div className="pt-6 mt-6 border-t border-gray-800 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 text-sm">Estimated In-House</span>
                  <span className="text-xl text-gray-500 font-mono line-through decoration-red-500/50">
                    <AnimatedNumber value={totalInHouse * currentMultiplier} currency={config.currency} />
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-bold text-lg">TAIO Hub Total</span>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono tracking-tighter">
                    <AnimatedNumber value={totalWithUs * currentMultiplier} currency={config.currency} />
                  </span>
                </div>
              </div>

              {/* Massive Savings Reveal Box */}
              <motion.div 
                animate={{ 
                  borderColor: step === 3 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(31, 41, 55, 1)',
                  backgroundColor: step === 3 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(17, 24, 39, 0.5)'
                }}
                className="mt-6 p-6 rounded-2xl border transition-colors duration-1000 relative overflow-hidden"
              >
                {step === 3 && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 0.1 }} 
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-green-500" 
                  />
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Projected Savings</span>
                  <span className={`text-3xl font-black font-mono tracking-tight transition-colors duration-1000 ${step === 3 ? 'text-green-400' : 'text-gray-600'}`}>
                    + <AnimatedNumber value={savings * currentMultiplier} currency={config.currency} />
                  </span>
                  <span className={`mt-2 text-sm font-bold transition-colors duration-1000 ${step === 3 ? 'text-green-500' : 'text-gray-700'}`}>
                    <AnimatedNumber value={percentSaved} isPercent={true} /> Efficiency Increase
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
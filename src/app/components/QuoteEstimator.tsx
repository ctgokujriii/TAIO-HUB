'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, animate } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from 'recharts';

// Configuration for countries, pricing, and terminology
const COUNTRY_CONFIG: Record<
  string,
  { name: string; currency: string; roleName: string; csrRate: number; dispatcherRate: number }
> = {
  UK: { name: 'United Kingdom', currency: '£', roleName: 'telephonists', csrRate: 4.5, dispatcherRate: 5.5 },
  USA: { name: 'United States of America', currency: '$', roleName: 'customer services reps', csrRate: 4.0, dispatcherRate: 5.0 },
  CAN: { name: 'Canada', currency: 'CA$', roleName: 'customer services reps', csrRate: 4.5, dispatcherRate: 5.5 },
  AUS: { name: 'Australia', currency: 'A$', roleName: 'customer services reps', csrRate: 4.5, dispatcherRate: 5.5 },
  NZ: { name: 'New Zealand', currency: 'NZ$', roleName: 'customer services reps', csrRate: 5.0, dispatcherRate: 6.0 },
};

const IN_HOUSE_DIVISOR = 0.25;

const HOURS = {
  monthly: 160,
  annually: 1920,
};

type Timeframe = 'hourly' | 'monthly' | 'annually';

export default function QuoteEstimator() {
  const router = useRouter();

  // State Management
  const [step, setStep] = useState<number>(1); // Step 1: Country, Step 2: CSRs, Step 3: Dispatchers, Step 4: Results
  const [countryKey, setCountryKey] = useState<string>('');
  const [csrCount, setCsrCount] = useState<number | null>(null);
  const [dispatchers, setDispatchers] = useState<number | null>(null);
  const [timeframe, setTimeframe] = useState<Timeframe>('hourly');
  
  const [U, setU] = useState<number>(0);
  const [V, setV] = useState<number>(0);
  const [saved, setSaved] = useState<number>(0);
  
  const [displayU, setDisplayU] = useState<number>(0);
  const [chartValues, setChartValues] = useState<{ inhouse: number; ours: number }>({
    inhouse: 0,
    ours: 0,
  });

  // Animation Effect
  useEffect(() => {
    if (U > 0 || V > 0) {
      const ctrl = animate(0, U, {
        duration: 1,
        onUpdate: (v) => setDisplayU(Number(v.toFixed(2))),
      });

      const chartAnim = animate(0, 1, {
        duration: 1,
        onUpdate: (progress) => {
          setChartValues({
            inhouse: Number((V * progress).toFixed(2)),
            ours: Number((U * progress).toFixed(2)),
          });
        },
      });

      return () => {
        ctrl.stop();
        chartAnim.stop();
      };
    } else {
      setDisplayU(0);
      setChartValues({ inhouse: 0, ours: 0 });
    }
  }, [U, V]);

  // Form Handlers
  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    
    if (val === 'OTHER') {
      const message = "I am looking for taxi outsourcing services from a location outside of the 5 mentioned -- Your message here";
      // Assuming your contact page is at /contact and accepts a 'message' query param
      router.push(`/contact?message=${encodeURIComponent(message)}`);
      return;
    }
    
    setCountryKey(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (countryKey !== '') setStep(2);
      return;
    }

    if (step === 2) {
      if (csrCount !== null && csrCount >= 0) setStep(3);
      return;
    }

    if (step === 3) {
      if (dispatchers === null || dispatchers < 0) return;

      const config = COUNTRY_CONFIG[countryKey];
      const totalWithUs = 
        (csrCount ?? 0) * config.csrRate + 
        (dispatchers ?? 0) * config.dispatcherRate;
        
      const totalInHouse = totalWithUs > 0 
        ? totalWithUs / IN_HOUSE_DIVISOR 
        : 0;
        
      const savings = totalInHouse - totalWithUs;

      setU(totalWithUs);
      setV(totalInHouse);
      setSaved(savings);
      setStep(4);
    }
  };

  const reset = () => {
    setStep(1);
    setCountryKey('');
    setCsrCount(null);
    setDispatchers(null);
    setU(0);
    setV(0);
    setSaved(0);
    setDisplayU(0);
    setChartValues({ inhouse: 0, ours: 0 });
    setTimeframe('hourly');
  };

  // Timeframe Extrapolation Logic
  const getMultiplier = (tf: Timeframe) => {
    if (tf === 'monthly') return HOURS.monthly;
    if (tf === 'annually') return HOURS.annually;
    return 1; // hourly
  };

  const currentMultiplier = getMultiplier(timeframe);
  const activeDisplayU = displayU * currentMultiplier;
  const activeV = V * currentMultiplier;
  const activeSaved = saved * currentMultiplier;
  const percentSaved = V > 0 ? (saved / V) * 100 : 0;

  const currentCurrency = countryKey ? COUNTRY_CONFIG[countryKey].currency : '£';
  const currentRoleName = countryKey ? COUNTRY_CONFIG[countryKey].roleName : 'telephonists';

  const chartData = [
    { name: 'In-House', value: chartValues.inhouse * currentMultiplier },
    { name: 'TAIO Hub', value: chartValues.ours * currentMultiplier },
  ];

  return (
    <section id="quote-estimator" className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl text-white">
        {step < 4 ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-center">
            
            {/* Step 1: Country Selection */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold">Where are you located?</h2>
                <select
                  value={countryKey}
                  onChange={handleCountrySelect}
                  className="w-full max-w-md mx-auto p-3 rounded bg-white/10 text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                  autoFocus
                >
                  <option value="" disabled className="text-gray-500 bg-gray-900">Select your country</option>
                  {Object.entries(COUNTRY_CONFIG).map(([key, data]) => (
                    <option key={key} value={key} className="bg-gray-900 text-white">
                      {data.name}
                    </option>
                  ))}
                  <option value="OTHER" className="bg-gray-900 text-white">Other</option>
                </select>
              </>
            )}

            {/* Step 2: CSRs / Telephonists */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold">
                  How many {currentRoleName}?
                </h2>
                <input
                  type="number"
                  min={0}
                  autoFocus
                  aria-label={`Number of ${currentRoleName}`}
                  value={csrCount ?? ''}
                  onChange={(e) => {
                    const val = e.target.value === '' ? null : parseInt(e.target.value, 10);
                    setCsrCount(val);
                  }}
                  className="w-full max-w-md mx-auto p-3 rounded bg-white/10 text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter number (0)"
                />
              </>
            )}

            {/* Step 3: Dispatchers */}
            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold">How many dispatchers?</h2>
                <input
                  type="number"
                  min={0}
                  autoFocus
                  aria-label="Number of dispatchers"
                  value={dispatchers ?? ''}
                  onChange={(e) => {
                    const val = e.target.value === '' ? null : parseInt(e.target.value, 10);
                    setDispatchers(val);
                  }}
                  className="w-full max-w-md mx-auto p-3 rounded bg-white/10 text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter number (0)"
                />
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 justify-center mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  (step === 1 && countryKey === '') ||
                  (step === 2 && csrCount === null) ||
                  (step === 3 && dispatchers === null)
                }
              >
                {step === 3 ? 'Calculate' : 'Next'}
              </button>
            </div>
          </form>
        ) : (
          /* Step 4: Results Dashboard */
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              
              <div className="flex justify-center md:justify-start bg-white/10 p-1 rounded-lg w-fit mb-4 mx-auto md:mx-0">
                {(['hourly', 'monthly', 'annually'] as Timeframe[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all duration-200 ${
                      timeframe === t 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <h3 className="text-2xl font-bold capitalize">Estimated {timeframe} Cost</h3>
              
              <motion.div className="text-5xl font-extrabold text-blue-400 my-3">
                {currentCurrency}{activeDisplayU.toFixed(2)}
              </motion.div>

              <p className="text-lg text-gray-300">
                In-House Cost : <span className="font-semibold">{currentCurrency}{activeV.toFixed(2)}*</span>
              </p>

              <p className="text-lg text-green-400 font-semibold mt-2">
                You save {currentCurrency}{activeSaved.toFixed(2)} — over {percentSaved.toFixed(2)}%*
              </p>
              
              <div className="mt-6 flex gap-3 justify-center md:justify-start">
                <button
                  onClick={reset}
                  className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors shadow-sm"
                >
                  Start Over
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg font-semibold transition-colors shadow-sm"
                >
                  Edit Numbers
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                *As per industry standards. All figures are estimates based on {COUNTRY_CONFIG[countryKey].name} rates. Monthly and Annual projections assume a standard 160-hour working month.
              </p>
            </div>

            <div className="flex-1 w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 32, right: 12, bottom: 12, left: 0 }}
                >
                  <defs>
                    <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>

                  <XAxis dataKey="name" stroke="#bbb" tick={{ fill: '#e5e7eb' }} />
                  <YAxis 
                    stroke="#bbb" 
                    tick={{ fill: '#e5e7eb' }}
                    tickFormatter={(value) => `${currentCurrency}${value}`} 
                    width={80} 
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff', fontWeight: 'bold', marginBottom: '4px' }}
                    formatter={(value: any) =>
                      typeof value === 'number' ? `${currentCurrency}${value.toFixed(2)}` : value
                    }
                  />

                  <Bar
                    dataKey="value"
                    radius={[8, 8, 0, 0]}
                    className="transition-all duration-300 hover:opacity-90"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? 'url(#redGradient)' : 'url(#greenGradient)'}
                      />
                    ))}
                    <LabelList
                      dataKey="value"
                      position="top"
                      formatter={(label: any) =>
                        typeof label === 'number' ? `${currentCurrency}${label.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` : label
                      }
                      fill="#fff"
                      style={{ fontWeight: 600 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
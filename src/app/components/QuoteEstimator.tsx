'use client';
import { useState, useEffect } from 'react';
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

export default function QuoteEstimator() {
  const [step, setStep] = useState<number>(1);
  const [telephonists, setTelephonists] = useState<number | null>(null);
  const [dispatchers, setDispatchers] = useState<number | null>(null);
  const [U, setU] = useState<number>(0);
  const [V, setV] = useState<number>(0);
  const [saved, setSaved] = useState<number>(0);
  const [displayU, setDisplayU] = useState<number>(0);
  const [chartValues, setChartValues] = useState<{ inhouse: number; ours: number }>({
    inhouse: 0,
    ours: 0,
  });

  useEffect(() => {
    if (U > 0 && V > 0) {
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

  const handleNext = () => {
    if (step === 1) {
      if (telephonists !== null && telephonists >= 0) setStep(2);
      return;
    }

    if (step === 2) {
      if (dispatchers === null || dispatchers < 0) return;

      const totalWithUs = (telephonists ?? 0) * 4.5 + (dispatchers ?? 0) * 5.5;
      const totalInHouse = totalWithUs / 0.25;
      const savings = totalInHouse - totalWithUs;

      setU(totalWithUs);
      setV(totalInHouse);
      setSaved(savings);
      setStep(3);
    }
  };

  const reset = () => {
    setStep(1);
    setTelephonists(null);
    setDispatchers(null);
    setU(0);
    setV(0);
    setSaved(0);
    setDisplayU(0);
    setChartValues({ inhouse: 0, ours: 0 });
  };

  const percentSaved = V > 0 ? (saved / V) * 100 : 0;

  const chartData = [
    { name: 'In-House', value: chartValues.inhouse },
    { name: 'TAIO Hub', value: chartValues.ours },
  ];

  return (
    <section id="quote-estimator" className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl text-white">
        {step < 3 ? (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">
              {step === 1 ? 'How many telephonists?' : 'How many dispatchers?'}
            </h2>

            <input
              type="number"
              min={0}
              value={step === 1 ? (telephonists ?? '') : (dispatchers ?? '')}
              onChange={(e) => {
                const v = e.target.value === '' ? null : parseInt(e.target.value, 10);
                if (step === 1) setTelephonists(v);
                else setDispatchers(v);
              }}
              className="w-full max-w-md mx-auto p-3 rounded bg-white/10 text-white text-center"
              placeholder="Enter number (0)"
            />

            <button
              onClick={handleNext}
              className="mt-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
            >
              {step === 1 ? 'Next' : 'Calculate'}
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold">Estimated Hourly Cost </h3>
              <motion.div className="text-5xl font-extrabold text-blue-400 my-3">
                £{displayU.toFixed(2)}
              </motion.div>

              <p className="text-lg text-gray-300">
                In-House Cost : <span className="font-semibold">£{V.toFixed(2)}*</span>
              </p>

              <p className="text-lg text-green-400 font-semibold mt-2">
                You save £{saved.toFixed(2)} — over {percentSaved.toFixed(2)}%*
              </p>
              <div className="mt-4 flex gap-3 justify-center md:justify-start">
                <button
                  onClick={reset}
                  className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
                >
                  Start Over
                </button>
                
              </div>
              <p className="text-lg text-gray-300 mt-2">*As per industry standards. All figures are estimates and may vary based on specific requirements.</p>

            </div>

            <div className="flex-1 w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
  <BarChart
    data={chartData}
    margin={{ top: 32, right: 12, bottom: 12, left: 0 }} // increased top margin
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

    <XAxis dataKey="name" stroke="#bbb" />
    <YAxis stroke="#bbb" />
    <Tooltip
      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none' }}
      labelStyle={{ color: '#fff' }}
      formatter={(value: any) =>
        typeof value === 'number' ? `£${value.toFixed(2)}` : value
      }
    />

    <Bar
      dataKey="value"
      radius={[8, 8, 0, 0]}
      // Removed scale hover, replaced with color fade for cleaner interaction
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
        formatter={(label) =>
          typeof label === 'number' ? `£${label.toFixed(2)}` : label
        }
        fill="#fff"
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

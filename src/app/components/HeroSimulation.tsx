"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Phone, Headphones, Car } from "lucide-react";

export default function HeroSimulation() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("ringing");
        await new Promise((r) => setTimeout(r, 1500));

        await controls.start("answered");
        await new Promise((r) => setTimeout(r, 1000));

        await controls.start("dispatched");
        await new Promise((r) => setTimeout(r, 2000));

        await controls.start("reset");
        await new Promise((r) => setTimeout(r, 1000));
      }
    };
    sequence();
  }, [controls]);

  const variants = {
    ringing: { scale: 1.1, rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.6 } },
    answered: { scale: 1, rotate: 0, color: "#22c55e" },
    dispatched: { x: 150, opacity: 0, transition: { duration: 1 } },
    reset: { x: 0, opacity: 1, color: "#3b82f6" },
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <h1 className="text-5xl font-bold mb-6">From Call to Car — Seamless Every Time.</h1>
      <p className="text-lg mb-12 text-gray-300">
        Experience dispatch done right — fast, reliable, and always connected.
      </p>

      <div className="relative flex items-center justify-center space-x-8">
        {/* Phone */}
        <motion.div animate={controls} variants={variants}>
          <Phone size={60} className="text-blue-500" />
        </motion.div>

        {/* Headset */}
        <motion.div
          animate={controls}
          variants={{
            ringing: { opacity: 0.3 },
            answered: { opacity: 1, color: "#22c55e" },
            dispatched: { opacity: 0.3 },
            reset: { opacity: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Headphones size={60} className="text-gray-400" />
        </motion.div>

        {/* Car */}
        <motion.div
          animate={controls}
          variants={{
            ringing: { x: 0 },
            answered: { x: 0 },
            dispatched: { x: 250, opacity: 1 },
            reset: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Car size={60} className="text-yellow-400" />
        </motion.div>
      </div>

      <motion.div
        animate={controls}
        variants={{
          ringing: { opacity: 0 },
          answered: { opacity: 1, y: 20 },
          dispatched: { opacity: 1, y: 0 },
          reset: { opacity: 0 },
        }}
        className="mt-12 text-xl text-gray-200"
      >
        Dispatch in motion — every second counts.
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
    </div>
  );
}
'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import LoginDropdown from "./LoginDropdown";

function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">

      {/* LOGIN DROPDOWN - Top Right */}
      <div className="absolute top-6 right-8 z-50">
        <LoginDropdown />
      </div>

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: 100, density: { enable: true, area: 700 } },
            color: { value: "#00bfff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.8,
              random: true,
              anim: { enable: true, speed: 26, opacity_min: 0.8, sync: false },
            },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: "bounce",
            },
            links: {
              enable: true,
              color: "#abb8c2",
              distance: 120,
              opacity: 0.4,
              width: 2,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Glowing Background Orb */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], opacity: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 blur-3xl opacity-40 top-[5%]"
      />

      {/* Animated Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 mt-[5vh]"
      >
        <Image
          src="/Logo.png"
          alt="TAIO Hub Logo"
          width={250}
          height={350}
          className="rounded-full shadow-2xl shadow-cyan-500/30"
          priority
        />
      </motion.div>

      {/* Trusted Badge - NEW & BEAUTIFUL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 z-10"
      >
        <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300">
          GDPR COMPLIANT
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="relative text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mt-10 mb-6 tracking-tight z-10 max-w-5xl mx-auto leading-tight"
      >
        <span className="animate-gradient-shimmer bg-[length:200%_auto] bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent inline-block">
          From the first ring, to the final drop,<br className="hidden md:block" /> we've got you covered.
        </span>
      </motion.h1>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all duration-300 z-10 mt-8"
        onClick={() =>
          document.getElementById("quote-estimator")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Get Started Today
      </motion.button>

     
      {/* Gradient Shimmer Animation */}
      <style jsx>{`
        @keyframes gradientShimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-gradient-shimmer {
          animation: gradientShimmer 6s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
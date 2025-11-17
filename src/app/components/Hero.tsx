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

      {/* 🌟 LOGIN DROPDOWN - Top Right */}
      <div className="absolute top-6 right-8 z-50">
        <LoginDropdown />
      </div>

      {/* 🌌 Particle Background */}
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

      {/* 💫 Glowing Background */}
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
      ></motion.div>

      {/* 🌀 Animated Logo */}
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
          className="rounded-full shadow-lg"
          priority
        />
      </motion.div>

      {/* ✨ Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="relative text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mt-[30vh] mb-6 tracking-tight z-10 overflow-hidden"
      >
        <span className="animate-gradient-shimmer bg-[length:200%_auto] bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
          From the first ring, to the final drop, we've got you covered.
        </span>
      </motion.h1>

      {/* 🚀 CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#00C896" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg z-10"
        onClick={() =>
          document
            .getElementById("quote-estimator")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Get Started
      </motion.button>

      {/* ⬇ Scroll-down arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="mt-12 text-cyan-300 z-10 cursor-pointer"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* 🎨 Gradient shimmer animation */}
      <style jsx>{`
        @keyframes gradientShimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        .animate-gradient-shimmer {
          animation: gradientShimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;

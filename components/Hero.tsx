"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroPhotos } from "@/lib/photos";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroPhotos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroPhotos[current].src}
            alt={heroPhotos[current].alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/40 via-ocean-dark/20 to-ocean-dark/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sand-light text-sm uppercase tracking-[0.4em] mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Heraklion Old Town &bull; Crete
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Aegean Lotus
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 mt-4 max-w-xl"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Sea View Apartments
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#booking"
            className="px-10 py-3.5 bg-sand text-ocean-dark text-sm uppercase tracking-widest font-medium hover:bg-sand-light transition-all duration-300"
          >
            Book Your Stay
          </a>
          <a
            href="#apartment"
            className="px-10 py-3.5 border border-white/40 text-white text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
          >
            Explore
          </a>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all duration-500 ${
              i === current ? "w-10 bg-sand" : "w-5 bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-8 z-10 hidden md:block"
      >
        <div className="w-px h-16 bg-white/30 mx-auto" />
        <p className="text-white/50 text-[10px] uppercase tracking-widest mt-2 -rotate-90 origin-center translate-y-4">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}

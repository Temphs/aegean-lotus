"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/lib/photos";

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-warm-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sand uppercase tracking-[0.3em] text-sm mb-4"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-charcoal"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Glimpse Inside
            </motion.h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-ocean/20 flex items-center justify-center hover:bg-ocean hover:text-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-ocean/20 flex items-center justify-center hover:bg-ocean hover:text-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Continuous Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto gallery-scroll px-6 cursor-grab active:cursor-grabbing"
      >
        {galleryPhotos.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.05 }}
            className={`flex-shrink-0 w-72 md:w-96 relative overflow-hidden group ${
              i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ocean-dark/0 group-hover:bg-ocean-dark/30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white text-sm">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Masonry Grid below */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryPhotos.slice(9, 13).map((img, i) => (
          <motion.div
            key={`grid-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative overflow-hidden group ${
              i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { apartmentWidePhoto } from "@/lib/photos";

const highlights = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4",
    title: "37m\u00B2 Apartment",
    desc: "Spacious one-bedroom with living area",
  },
  {
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    title: "Sea & City View",
    desc: "Direct Aegean views from bed and balcony",
  },
  {
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
    title: "Private Balcony",
    desc: "Perfect for sunrise and sunset",
  },
  {
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4",
    title: "Full Kitchen",
    desc: "Stovetop, fridge, oven, coffee maker",
  },
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Smart TV & WiFi",
    desc: "Streaming services and fast internet",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Spotless Clean",
    desc: "9.8 cleanliness rating from guests",
  },
];

const amenities = [
  "Air Conditioning",
  "Walk-in Shower",
  "Washing Machine",
  "Queen-size Bed",
  "Sofa Bed",
  "Soundproofed Windows",
  "Coffee Machine",
  "Electric Kettle",
  "Hair Dryer",
  "Safety Deposit Box",
  "Eco-friendly Toiletries",
  "Iron & Ironing Board",
];

export default function Apartment() {
  return (
    <section id="apartment" className="py-24 md:py-32 bg-cream">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sand uppercase tracking-[0.3em] text-sm mb-4"
        >
          The Space
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-light text-charcoal"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Your Home in Heraklion
        </motion.h2>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-warm-white p-8 group hover:shadow-lg transition-shadow duration-500"
          >
            <svg
              className="w-8 h-8 text-ocean mb-4 group-hover:text-sand transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.icon}
              />
            </svg>
            <h3
              className="text-xl font-medium text-charcoal mb-2"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {item.title}
            </h3>
            <p className="text-sm text-charcoal-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Full-width Image Break */}
      <div className="w-full h-[50vh] relative mb-20 overflow-hidden">
        <img
          src={apartmentWidePhoto.src}
          alt={apartmentWidePhoto.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-dark/30" />
      </div>

      {/* Amenities List */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-charcoal text-center mb-12"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Everything You Need
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 py-3 border-b border-sand/20"
            >
              <span className="w-1.5 h-1.5 bg-sand rounded-full flex-shrink-0" />
              <span className="text-sm text-charcoal-light">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

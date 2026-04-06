"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Shuli",
    country: "Germany",
    text: "A room with a view! The sea view is worthy the trip. You get pretty much everything you need, enough space for two. The host even prepared a bottle of wine and snacks as welcome offer.",
    rating: 10,
  },
  {
    name: "Harmony",
    country: "France",
    text: "We had a truly wonderful stay. The place was absolutely spotless, perfectly maintained, and of outstanding quality. The sea view was breathtaking, and we enjoyed every moment.",
    rating: 10,
  },
  {
    name: "Debbyad",
    country: "Canada",
    text: "The owner came right away and helped us. He was so great. The apartment was wonderful with an amazing view of the sea.",
    rating: 10,
  },
  {
    name: "Nienke",
    country: "Netherlands",
    text: "Location was amazing! Right by the sea with a wonderful view even from your bed. Super tidy and very clean. The host was really friendly and always reachable for tips.",
    rating: 10,
  },
  {
    name: "Katrin",
    country: "Germany",
    text: "The apartment was very clean, beautifully furnished and the view was fantastic! There was even a welcome package with snacks and wine. Plenty of coffee, tea and even detergent for the washing machine.",
    rating: 10,
  },
  {
    name: "Yevheniia",
    country: "Ukraine",
    text: "These apartments I will remember for a lifetime! They are gorgeous, with incredible views and perfect comfort.",
    rating: 10,
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-ocean-dark text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ocean/20 -skew-x-12 translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sand uppercase tracking-[0.3em] text-sm mb-4">
              Testimonials
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What Our
              <br />
              Guests Say
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-6xl font-light text-sand"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                9.5
              </span>
              <div>
                <p className="text-sm font-medium">Exceptional</p>
                <p className="text-xs text-white/60">23 verified reviews</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-sand hover:border-sand hover:text-ocean-dark transition-all duration-300"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-sand hover:border-sand hover:text-ocean-dark transition-all duration-300"
                aria-label="Next review"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Review Card */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14"
              >
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-sand/40 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>

                <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
                  {reviews[current].text}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sand">
                      {reviews[current].name}
                    </p>
                    <p className="text-sm text-white/50">
                      {reviews[current].country}
                    </p>
                  </div>
                  <div className="bg-ocean px-4 py-2">
                    <span className="text-xl font-light" style={{ fontFamily: "var(--font-cormorant)" }}>
                      {reviews[current].rating}
                    </span>
                    <span className="text-xs text-white/60">/10</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-6 justify-center lg:justify-start">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === current ? "w-8 bg-sand" : "w-3 bg-white/20"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

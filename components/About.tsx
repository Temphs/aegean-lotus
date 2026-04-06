"use client";

import { motion } from "framer-motion";
import { aboutPhoto } from "@/lib/photos";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-sand/30 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sand uppercase tracking-[0.3em] text-sm mb-4">
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Where Heart &<br />
              Heritage Meet
            </h2>
            <div className="space-y-5 text-charcoal-light leading-relaxed">
              <p>
                Aegean Lotus was born from our journey — across borders and back
                to Crete, where heart and heritage meet. As an international
                couple who once worked in humanitarian fields, we&apos;ve always
                valued connection and community.
              </p>
              <p>
                We restored a beloved family property in the heart of Heraklion,
                blending its history with calm, modern comfort. Each apartment
                features minimalist design with natural tones — a peaceful
                retreat in the center of the city.
              </p>
              <p>
                We welcome you not just as guests, but as fellow travelers in
                search of beauty, rest, and a sense of belonging.
              </p>
            </div>

            <div className="mt-10 flex gap-12">
              <div>
                <p
                  className="text-4xl font-light text-ocean"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  9.5
                </p>
                <p className="text-xs uppercase tracking-widest text-charcoal-light mt-1">
                  Guest Rating
                </p>
              </div>
              <div>
                <p
                  className="text-4xl font-light text-ocean"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  9.8
                </p>
                <p className="text-xs uppercase tracking-widest text-charcoal-light mt-1">
                  Cleanliness
                </p>
              </div>
              <div>
                <p
                  className="text-4xl font-light text-ocean"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  9.5
                </p>
                <p className="text-xs uppercase tracking-widest text-charcoal-light mt-1">
                  Location
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

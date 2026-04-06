"use client";

import { motion } from "framer-motion";
import { bookingBgPhoto } from "@/lib/photos";

export default function Booking() {
  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <img
        src={bookingBgPhoto.src}
        alt={bookingBgPhoto.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ocean-dark/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sand uppercase tracking-[0.3em] text-sm mb-4"
        >
          Reserve Your Stay
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-light mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Book Direct &<br />
          Save More
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Book directly with us for the best rates, flexible cancellation, and a
          personal touch. No middleman, no hidden fees — just a warm welcome
          waiting for you in Heraklion.
        </motion.p>

        {/* Booking Widget Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-left">
              <label className="text-xs uppercase tracking-widest text-sand-light mb-2 block">
                Check-in
              </label>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors"
              />
            </div>
            <div className="text-left">
              <label className="text-xs uppercase tracking-widest text-sand-light mb-2 block">
                Check-out
              </label>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors"
              />
            </div>
            <div className="text-left">
              <label className="text-xs uppercase tracking-widest text-sand-light mb-2 block">
                Guests
              </label>
              <select defaultValue="2" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
              </select>
            </div>
          </div>

          <button className="w-full md:w-auto px-16 py-4 bg-sand text-ocean-dark text-sm uppercase tracking-widest font-medium hover:bg-sand-light transition-all duration-300">
            Check Availability
          </button>

          <p className="text-xs text-white/40 mt-4">
            Booking engine coming soon. For now, contact us directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sand uppercase tracking-[0.3em] text-sm mb-4">
              Get in Touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We&apos;d Love to
              <br />
              Hear From You
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ocean/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">Address</p>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Stylianou kai Nikolaou Giamalaki 47
                    <br />
                    Heraklio Town, 712 02, Crete, Greece
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ocean/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">Email</p>
                  <p className="text-sm text-charcoal-light">
                    info@aegeanlotus.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ocean/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">Languages</p>
                  <p className="text-sm text-charcoal-light">
                    English, Greek, Turkish, Arabic
                  </p>
                </div>
              </div>
            </div>

            {/* Host */}
            <div className="mt-12 p-6 bg-warm-white">
              <p className="text-xs uppercase tracking-widest text-sand mb-3">
                Your Host
              </p>
              <p
                className="text-2xl font-light text-charcoal mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Alper Hasan Tanyel
              </p>
              <p className="text-sm text-charcoal-light">
                Host rating: 9.7/10 &bull; 24/7 support available
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-charcoal-light mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal focus:outline-none focus:border-ocean transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-charcoal-light mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal focus:outline-none focus:border-ocean transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-charcoal-light mb-2 block">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal focus:outline-none focus:border-ocean transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-charcoal-light mb-2 block">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal focus:outline-none focus:border-ocean transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-charcoal-light mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal focus:outline-none focus:border-ocean transition-colors resize-none"
                  placeholder="Any special requests or questions..."
                />
              </div>

              <button
                type="submit"
                className="px-12 py-4 bg-ocean text-white text-sm uppercase tracking-widest hover:bg-ocean-light transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

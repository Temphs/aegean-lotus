"use client";

import { motion } from "framer-motion";

const nearby = [
  { name: "Historical Museum of Crete", distance: "100m", icon: "museum" },
  { name: "Heraklion Archaeological Museum", distance: "800m", icon: "museum" },
  { name: "Rocca a Mare Fortress", distance: "900m", icon: "castle" },
  { name: "Morosini Fountain (Lion Square)", distance: "400m", icon: "landmark" },
  { name: "Venetian Walls", distance: "1.2km", icon: "landmark" },
  { name: "Amoudara Beach", distance: "1.9km", icon: "beach" },
  { name: "Palace of Knossos", distance: "6km", icon: "historic" },
  { name: "Heraklion Airport", distance: "3.2km", icon: "airport" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map / Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-ocean/5 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.5!2d25.1336!3d35.3387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIwJzE5LjMiTiAyNcKwMDgnMDEuMCJF!5e0!3m2!1sen!2sgr!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aegean Lotus location on map"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-ocean text-white p-6">
              <p className="text-xs uppercase tracking-widest mb-1 text-sand-light">
                Address
              </p>
              <p className="text-sm leading-relaxed">
                Stylianou kai Nikolaou
                <br />
                Giamalaki 47
                <br />
                Heraklio Town, 712 02
                <br />
                Crete, Greece
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sand uppercase tracking-[0.3em] text-sm mb-4">
              Location
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              In the Heart of
              <br />
              Heraklion
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-10">
              Steps from the Cretan Sea and Heraklion&apos;s vibrant old town.
              Enjoy seaside strolls along Dermata Bay, visit the iconic Koules
              Fortress, or relax at waterfront caf&eacute;s. Traditional
              bakeries, cozy taverns, and historic sites are all within walking
              distance.
            </p>

            {/* Nearby Places */}
            <div className="space-y-0">
              {nearby.map((place, i) => (
                <motion.div
                  key={place.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between py-4 border-b border-sand/15"
                >
                  <span className="text-sm text-charcoal">{place.name}</span>
                  <span className="text-sm text-ocean font-medium">
                    {place.distance}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

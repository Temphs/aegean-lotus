"use client";

import { motion } from "framer-motion";

const rules = [
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Check-in", value: "From 15:00" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Check-out", value: "Until 11:00" },
  { icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728A9 9 0 015.636 5.636", label: "No smoking", value: "Indoors (balcony OK)" },
  { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", label: "Quiet hours", value: "22:00 - 08:00" },
  { icon: "M6 18L18 6M6 6l12 12", label: "No parties", value: "Not permitted" },
  { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", label: "Min age", value: "18+ to check in" },
  { icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z", label: "Free cot", value: "For ages 0-3" },
  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", label: "Stairs only", value: "No elevator" },
];

export default function HouseRules() {
  return (
    <section className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sand uppercase tracking-[0.3em] text-sm mb-4">
            Good to Know
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            House Rules
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center p-6 bg-cream/50 hover:bg-cream transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-ocean mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={rule.icon} />
              </svg>
              <p className="text-sm font-medium text-charcoal mb-1">{rule.label}</p>
              <p className="text-xs text-charcoal-light">{rule.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

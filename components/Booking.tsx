"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DayPicker, DateRange } from "react-day-picker";
import { format, differenceInCalendarDays, addDays, isBefore, startOfToday } from "date-fns";
import { bookingBgPhoto } from "@/lib/photos";
import "react-day-picker/dist/style.css";

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  guests: number;
}

const defaultForm: BookingForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
  guests: 2,
};

export default function Booking() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<BookingForm>(defaultForm);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  // Fetch availability / blocked dates on mount
  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    const future = format(addDays(new Date(), 365), "yyyy-MM-dd");
    fetch(`/api/availability?checkIn=${today}&checkOut=${future}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.blockedDates) {
          setBlockedDates(data.blockedDates.map((d: string) => new Date(d)));
        }
      })
      .catch(() => {});
  }, []);

  const nights =
    range?.from && range?.to
      ? differenceInCalendarDays(range.to, range.from)
      : 0;

  const isDisabled = (date: Date) => {
    if (isBefore(date, startOfToday())) return true;
    return blockedDates.some(
      (b) => format(b, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!range?.from || !range?.to) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkIn: format(range.from, "yyyy-MM-dd"),
          checkOut: format(range.to, "yyyy-MM-dd"),
          guests: form.guests,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          notes: form.notes,
        }),
      });
      const data = await res.json();
      setResult({ success: data.success, message: data.message });
      if (data.success) {
        setShowForm(false);
        setRange(undefined);
      }
    } catch {
      setResult({ success: false, message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <img
        src={bookingBgPhoto.src}
        alt={bookingBgPhoto.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ocean-dark/82" />

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
          Book directly with us for the best rates and a personal welcome.
          No middleman, no hidden fees — just a warm stay in Heraklion.
        </motion.p>

        {/* Main Booking Widget */}
        <AnimatePresence mode="wait">
          {!result?.success ? (
            <motion.div
              key="widget"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10"
            >
              {/* Step 1 — Date picker trigger */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div
                  className="text-left cursor-pointer"
                  onClick={() => { setShowCalendar(true); setShowForm(false); }}
                >
                  <label className="text-xs uppercase tracking-widest text-sand-light mb-2 block cursor-pointer">
                    Check-in
                  </label>
                  <div className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm hover:border-sand transition-colors">
                    {range?.from ? format(range.from, "dd MMM yyyy") : <span className="text-white/50">Select date</span>}
                  </div>
                </div>
                <div
                  className="text-left cursor-pointer"
                  onClick={() => { setShowCalendar(true); setShowForm(false); }}
                >
                  <label className="text-xs uppercase tracking-widest text-sand-light mb-2 block cursor-pointer">
                    Check-out
                  </label>
                  <div className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm hover:border-sand transition-colors">
                    {range?.to ? format(range.to, "dd MMM yyyy") : <span className="text-white/50">Select date</span>}
                  </div>
                </div>
                <div className="text-left">
                  <label className="text-xs uppercase tracking-widest text-sand-light mb-2 block">
                    Guests
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                  </select>
                </div>
              </div>

              {/* Inline Calendar */}
              <AnimatePresence>
                {showCalendar && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mb-8"
                  >
                    <div className="flex justify-center">
                      <div className="booking-calendar">
                        <DayPicker
                          mode="range"
                          selected={range}
                          onSelect={setRange}
                          numberOfMonths={2}
                          disabled={isDisabled}
                          fromDate={new Date()}
                          modifiersClassNames={{
                            selected: "rdp-day_selected",
                            range_start: "rdp-day_range_start",
                            range_end: "rdp-day_range_end",
                            range_middle: "rdp-day_range_middle",
                            disabled: "rdp-day_disabled",
                          }}
                        />
                      </div>
                    </div>
                    {nights > 0 && (
                      <p className="text-sand text-sm mt-3">
                        {nights} night{nights !== 1 ? "s" : ""} selected
                      </p>
                    )}
                    <div className="flex gap-3 justify-center mt-4">
                      <button
                        onClick={() => { setRange(undefined); setShowCalendar(false); }}
                        className="px-6 py-2 border border-white/30 text-white/70 text-xs uppercase tracking-widest hover:border-white/60 transition-colors"
                      >
                        Clear
                      </button>
                      {range?.from && range?.to && (
                        <button
                          onClick={() => { setShowCalendar(false); setShowForm(true); }}
                          className="px-8 py-2 bg-sand text-ocean-dark text-xs uppercase tracking-widest font-medium hover:bg-sand-light transition-colors"
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 2 — Guest details form */}
              <AnimatePresence>
                {showForm && range?.from && range?.to && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="text-left space-y-4 border-t border-white/20 pt-6 mb-6"
                  >
                    <p className="text-sand text-sm uppercase tracking-widest mb-4">Your Details</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        required
                        placeholder="First name"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors w-full"
                      />
                      <input
                        required
                        placeholder="Last name"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors w-full"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        required
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors w-full"
                      />
                      <input
                        placeholder="Phone (optional)"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors w-full"
                      />
                    </div>
                    <textarea
                      rows={3}
                      placeholder="Special requests (optional)"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors w-full resize-none"
                    />
                    {result && !result.success && (
                      <p className="text-red-400 text-sm">{result.message}</p>
                    )}
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => { setShowForm(false); setShowCalendar(true); }}
                        className="px-6 py-3 border border-white/30 text-white/70 text-xs uppercase tracking-widest hover:border-white/60 transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 py-3 bg-sand text-ocean-dark text-sm uppercase tracking-widest font-medium hover:bg-sand-light transition-all duration-300 disabled:opacity-60"
                      >
                        {submitting ? "Sending…" : "Request Booking"}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Default CTA when no dates selected */}
              {!showCalendar && !showForm && (
                <button
                  onClick={() => setShowCalendar(true)}
                  className="w-full md:w-auto px-16 py-4 bg-sand text-ocean-dark text-sm uppercase tracking-widest font-medium hover:bg-sand-light transition-all duration-300"
                >
                  Check Availability
                </button>
              )}

              <p className="text-xs text-white/40 mt-4">
                Best rates guaranteed when booking direct.
              </p>
            </motion.div>
          ) : (
            /* Success state */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md border border-sand/40 p-10 text-center"
            >
              <div className="text-sand text-5xl mb-4">✦</div>
              <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                Booking Request Received
              </h3>
              <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">
                {result.message}
              </p>
              <button
                onClick={() => setResult(null)}
                className="mt-6 px-8 py-3 border border-sand/60 text-sand text-xs uppercase tracking-widest hover:bg-sand/10 transition-colors"
              >
                Make Another Request
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

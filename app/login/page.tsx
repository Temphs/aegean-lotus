"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// Password — change here if needed
const SITE_PASSWORD = "AegeanLotus";
const COOKIE_NAME = "aegean-auth";
const COOKIE_VALUE = "granted";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  // If already authed, skip
  useEffect(() => {
    const cookies = document.cookie.split(";").map((c) => c.trim());
    if (cookies.some((c) => c === `${COOKIE_NAME}=${COOKIE_VALUE}`)) {
      const from = searchParams.get("from") || "/";
      router.replace(from);
    }
  }, [router, searchParams]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      // Set cookie (30-day expiry)
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}; expires=${expires}; path=/; SameSite=Strict`;
      const from = searchParams.get("from") || "/";
      router.replace(from);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setPassword("");
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--ocean-dark)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, #1B4965 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #C6A969 0%, transparent 50%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm px-8"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <p
            className="text-3xl font-light text-white tracking-wide mb-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Aegean Lotus
          </p>
          <p className="text-xs uppercase tracking-[0.35em] text-sand opacity-80">
            Sea View Apartments
          </p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5">
            <label className="block text-xs uppercase tracking-widest text-sand-light mb-2">
              Password
            </label>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter site password"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-sand transition-colors"
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-xs mb-4 text-center"
            >
              Incorrect password. Please try again.
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-sand text-ocean-dark text-sm uppercase tracking-widest font-medium hover:bg-sand-light transition-all duration-300"
          >
            Enter
          </button>
        </motion.form>

        <p className="text-white/20 text-xs text-center mt-8">
          © {new Date().getFullYear()} Aegean Lotus
        </p>
      </motion.div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

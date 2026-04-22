"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Minimal SVG tree — 10 strokes drawn in sequence:
  roots → trunk → main branches → sub-branches
  viewBox "0 0 100 130"
*/
const STROKES = [
  // roots
  { d: "M 50 118 L 36 127", delay: 0,    dur: 0.35 },
  { d: "M 50 118 L 64 127", delay: 0.08, dur: 0.35 },
  // trunk
  { d: "M 50 118 L 50 70",  delay: 0.2,  dur: 0.7  },
  // main branches
  { d: "M 50 70 L 16 40",   delay: 0.85, dur: 0.55 },
  { d: "M 50 70 L 84 40",   delay: 0.85, dur: 0.55 },
  // center upward twig
  { d: "M 50 70 L 50 48",   delay: 1.1,  dur: 0.3  },
  // sub-branches left
  { d: "M 16 40 L 5 18",    delay: 1.35, dur: 0.45 },
  { d: "M 16 40 L 28 16",   delay: 1.45, dur: 0.45 },
  // sub-branches right
  { d: "M 84 40 L 72 16",   delay: 1.35, dur: 0.45 },
  { d: "M 84 40 L 95 18",   delay: 1.45, dur: 0.45 },
];

export default function TreeIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center cursor-pointer select-none"
          style={{ background: "#1A2E26" }}
        >
          {/* Subtle radial glow behind tree */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.18, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #C9A96E, transparent 70%)" }}
          />

          {/* SVG tree */}
          <svg
            viewBox="0 0 100 130"
            width="140"
            height="182"
            className="relative z-10 mb-10"
            aria-label="Árbol Areguá Forest"
          >
            {STROKES.map((s, i) => (
              <motion.path
                key={i}
                d={s.d}
                stroke="#C9A96E"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { delay: s.delay, duration: s.dur, ease: "easeOut" },
                  opacity:    { delay: s.delay, duration: 0.01 },
                }}
              />
            ))}
          </svg>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.7, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <p
              className="text-white uppercase tracking-[0.55em] font-light"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px" }}
            >
              Areguá
            </p>
            <p
              className="text-gold uppercase tracking-[1em] font-light"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "11px", marginTop: "4px" }}
            >
              Forest
            </p>
          </motion.div>

          {/* Thin progress bar at bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0, duration: 3.6, ease: "linear" }}
            className="absolute bottom-10 h-px w-20 bg-white/20 origin-left"
          />

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5 }}
            className="absolute bottom-8 text-white/20 text-[10px] tracking-[0.3em] uppercase"
          >
            toca para continuar
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 0,
    gradient: "linear-gradient(135deg, #1A2E26 0%, #2D4A3E 50%, #1A1A1A 100%)",
    eyebrow: "Areguá, Paraguay",
    title: "Donde la Naturaleza\nDefine el Lujo",
    subtitle:
      "39 hectáreas de vida exclusiva rodeadas de bosque nativo, lagunas y un entorno de serenidad absoluta.",
    cta: "Descubrir el Proyecto",
    ctaHref: "#proyecto",
  },
  {
    id: 1,
    gradient: "linear-gradient(135deg, #1A1A1A 0%, #2D4A3E 60%, #4A7C59 100%)",
    eyebrow: "560 Lotes · 360–630 m²",
    title: "Tu Espacio,\nTu Identidad",
    subtitle:
      "Cada lote es una oportunidad de construir la vida que imaginas, en un entorno diseñado para el bienestar.",
    cta: "Ver Disponibilidad",
    ctaHref: "#roadmap",
  },
  {
    id: 2,
    gradient: "linear-gradient(160deg, #2D4A3E 0%, #1A2E26 40%, #C9A96E22 100%)",
    eyebrow: "Club House · Lagunas · Deportes",
    title: "Amenities de\nPrimer Nivel",
    subtitle:
      "Club House, piscinas, canchas de tenis y paddle, gimnasio, senderos y una comunidad vibrante te esperan.",
    cta: "Explorar Amenities",
    ctaHref: "#amenities",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d * 80, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d * -80, opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
          style={{ background: slide.gradient }}
        />
      </AnimatePresence>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
              {slide.eyebrow}
            </p>
            <h1 className="font-heading text-6xl md:text-8xl font-light text-white leading-[1.05] tracking-tight mb-6 whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-10 font-light">
              {slide.subtitle}
            </p>
            <a
              href={slide.ctaHref}
              className="inline-block border border-white/60 text-white text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-white hover:text-stone transition-all duration-400"
            >
              {slide.cta}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-12 left-6 right-6 max-w-7xl mx-auto z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-px transition-all duration-400 ${
                i === current ? "w-10 bg-white" : "w-4 bg-white/30"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Siguiente slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
}

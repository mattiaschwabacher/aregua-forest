"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Areguá, Paraguay",
    title: "Donde la Naturaleza\nDefine el Lujo",
    subtitle:
      "39 hectáreas de vida exclusiva rodeadas de bosque nativo, lagunas y un entorno de serenidad absoluta.",
    cta: "Descubrir el Proyecto",
    ctaHref: "#proyecto",
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "560 Lotes · 360–630 m²",
    title: "Tu Espacio,\nTu Identidad",
    subtitle:
      "Cada lote es una oportunidad de construir la vida que imaginas, en un entorno diseñado para el bienestar.",
    cta: "Ver Disponibilidad",
    ctaHref: "#roadmap",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
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

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Preload all slides, fade active one */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.eyebrow}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-stone/55" />
        </div>
      ))}

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-stone/30 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-light">
              {slides[current].eyebrow}
            </p>
            <h1 className="font-heading text-6xl md:text-8xl font-light text-white leading-[1.05] tracking-tight mb-6 whitespace-pre-line">
              {slides[current].title}
            </h1>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-md mb-10 font-light">
              {slides[current].subtitle}
            </p>
            <a
              href={slides[current].ctaHref}
              className="inline-block border border-white/60 text-white text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-white hover:text-stone transition-all duration-300"
            >
              {slides[current].cta}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-12 left-6 right-6 max-w-7xl mx-auto z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
}

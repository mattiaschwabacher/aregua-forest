"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "El Proyecto", href: "#proyecto" },
  { label: "Amenities", href: "#amenities" },
  { label: "Avances", href: "#avances" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "El Equipo", href: "#equipo" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-stone/95 backdrop-blur-md py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-heading text-2xl font-light tracking-widest text-white uppercase"
            >
              Areguá
            </span>
            <span
              className="font-heading text-xs tracking-[0.4em] text-gold-light uppercase"
            >
              Forest
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest text-white/80 hover:text-white uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="text-xs tracking-widest border border-white/40 text-white px-5 py-2 uppercase hover:bg-white hover:text-stone transition-all duration-300"
            >
              Contacto
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white p-1"
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-forest-dark flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-heading text-2xl font-light tracking-widest text-white uppercase">
                Areguá <span className="text-gold">Forest</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white p-1"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-10 gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="font-heading text-4xl font-light text-white tracking-wide border-b border-white/10 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.07 + 0.1, duration: 0.3 }}
                className="mt-4 inline-block border border-gold text-gold text-sm tracking-widest uppercase px-8 py-3 w-fit"
              >
                Contacto
              </motion.a>
            </nav>

            <div className="px-10 pb-10">
              <p className="text-white/30 text-xs tracking-widest uppercase">
                Areguá, Paraguay
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

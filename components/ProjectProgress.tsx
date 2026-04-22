"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AvanceImage {
  src: string;
  alt: string;
}

interface Avance {
  id: number;
  year: number;
  month: number;
  monthLabel: string;
  phase: string;
  progress: number;
  images: AvanceImage[];
}

interface Props {
  data: Avance[];
}

export default function ProjectProgress({ data }: Props) {
  const years = [...new Set(data.map((a) => a.year))].sort();
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedMonth, setSelectedMonth] = useState<number | "all">("all");

  const filtered = data.filter((a) => {
    const matchYear = selectedYear === "all" || a.year === selectedYear;
    const matchMonth = selectedMonth === "all" || a.month === selectedMonth;
    return matchYear && matchMonth;
  });

  const months = [
    { value: 1, label: "Ene" }, { value: 2, label: "Feb" }, { value: 3, label: "Mar" },
    { value: 4, label: "Abr" }, { value: 5, label: "May" }, { value: 6, label: "Jun" },
    { value: 7, label: "Jul" }, { value: 8, label: "Ago" }, { value: 9, label: "Sep" },
    { value: 10, label: "Oct" }, { value: 11, label: "Nov" }, { value: 12, label: "Dic" },
  ];

  const latestProgress = data.reduce(
    (max, a) => (a.progress > max.progress ? a : max),
    data[0]
  );

  return (
    <section id="avances" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-forest uppercase mb-3">
              Obra en Curso
            </p>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-stone leading-tight">
              Avances de Construcción
            </h2>
          </div>

          {latestProgress && (
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs tracking-widest text-stone/40 uppercase mb-1">
                  Progreso actual
                </p>
                <p className="font-heading text-5xl font-light text-forest">
                  {latestProgress.progress}%
                </p>
                <p className="text-xs text-stone/50 mt-1">{latestProgress.phase}</p>
              </div>
              <div className="w-px h-16 bg-stone/10" />
              <div>
                <p className="text-xs tracking-widest text-stone/40 uppercase mb-1">
                  Última actualización
                </p>
                <p className="text-sm text-stone font-light">{latestProgress.monthLabel}</p>
              </div>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => { setSelectedYear("all"); setSelectedMonth("all"); }}
            className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
              selectedYear === "all"
                ? "bg-forest text-white border-forest"
                : "border-stone/20 text-stone/60 hover:border-forest hover:text-forest"
            }`}
          >
            Todos
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => { setSelectedYear(y); setSelectedMonth("all"); }}
              className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                selectedYear === y
                  ? "bg-forest text-white border-forest"
                  : "border-stone/20 text-stone/60 hover:border-forest hover:text-forest"
              }`}
            >
              {y}
            </button>
          ))}
          {selectedYear !== "all" && (
            <>
              <div className="w-px h-8 bg-stone/10 self-center" />
              {months.map((m) => {
                const hasData = data.some(
                  (a) => a.year === selectedYear && a.month === m.value
                );
                if (!hasData) return null;
                return (
                  <button
                    key={m.value}
                    onClick={() =>
                      setSelectedMonth(m.value === selectedMonth ? "all" : m.value)
                    }
                    className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                      selectedMonth === m.value
                        ? "bg-stone text-white border-stone"
                        : "border-stone/20 text-stone/60 hover:border-stone hover:text-stone"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </>
          )}
        </div>

        {/* Grid */}
        <div className="space-y-12">
          {filtered.map((avance) => (
            <motion.div
              key={avance.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <p className="font-heading text-xl font-light text-stone">
                    {avance.monthLabel}
                  </p>
                  <p className="text-xs text-stone/40 tracking-widest uppercase">
                    {avance.phase} · {avance.progress}% completado
                  </p>
                </div>
                <div className="flex-1 h-px bg-stone/10" />
                <div className="w-10 h-10 rounded-full border border-forest/30 flex items-center justify-center">
                  <span className="text-xs font-light text-forest">{avance.progress}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {avance.images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] overflow-hidden relative group"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-500 flex items-end p-3">
                      <p className="text-white text-[10px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-stone/30 text-sm tracking-widest uppercase">
              No hay avances para este período
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const milestones = [
  {
    id: 1,
    date: "Q4 2023",
    title: "Lanzamiento del Proyecto",
    desc: "Apertura oficial de ventas. Presentación del masterplan, avance de obras y primeras unidades disponibles.",
    status: "done" as const,
    detail: [
      "Masterplan aprobado",
      "Ventas oficiales iniciadas",
      "Infraestructura base comenzada",
    ],
  },
  {
    id: 2,
    date: "2024",
    title: "Venta de Lotes",
    desc: "Comercialización activa de las 560 unidades. Financiamiento flexible y atención personalizada.",
    status: "done" as const,
    detail: [
      "Plan de financiamiento lanzado",
      "60% de lotes reservados",
      "Obras de infraestructura avanzando",
    ],
  },
  {
    id: 3,
    date: "2025",
    title: "Amenities & Club House",
    desc: "Inauguración del Club House, piscinas, canchas deportivas y lagunas artificiales.",
    status: "active" as const,
    detail: [
      "Club House: 90% avanzado",
      "Laguna principal finalizada",
      "Canchas en proceso",
    ],
  },
  {
    id: 4,
    date: "2026",
    title: "Entrega de Lotes",
    desc: "Entrega total de lotes con infraestructura completa: calles, servicios y acceso al club.",
    status: "upcoming" as const,
    detail: [
      "Escrituración de propietarios",
      "Habilitación completa",
      "Comunidad activa",
    ],
  },
];

const statusIcon = {
  done: CheckCircle2,
  active: Clock,
  upcoming: Circle,
};

const statusColor = {
  done: "text-forest",
  active: "text-gold",
  upcoming: "text-stone/20",
};

export default function Roadmap() {
  const [active, setActive] = useState<number | null>(3);

  return (
    <section id="roadmap" className="py-28 bg-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">
            Timeline
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-white leading-tight">
            Roadmap Estratégico
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-[11px] top-3 bottom-3 w-px bg-white/10" />

          <div className="space-y-0">
            {milestones.map((m, i) => {
              const Icon = statusIcon[m.status];
              const isOpen = active === m.id;

              return (
                <div key={m.id} className="relative">
                  <button
                    onClick={() => setActive(isOpen ? null : m.id)}
                    className="w-full text-left group"
                  >
                    <div className="flex gap-6 md:gap-10 items-start py-8 border-b border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex-shrink-0 mt-1 relative z-10 bg-stone">
                        <Icon
                          size={22}
                          className={`${statusColor[m.status]} transition-transform duration-300 ${
                            isOpen ? "scale-110" : ""
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                        <span className="text-xs tracking-[0.3em] text-white/30 uppercase w-20 flex-shrink-0">
                          {m.date}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-heading text-2xl md:text-3xl font-light text-white leading-tight group-hover:text-gold transition-colors duration-200">
                            {m.title}
                          </h3>
                        </div>
                        <div className="md:w-8 flex-shrink-0 flex items-center justify-end">
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-5 h-5 flex items-center justify-center"
                          >
                            <span className="text-white/30 text-lg leading-none">+</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 md:pl-[calc(88px+2.5rem)] pb-8">
                      <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-lg">
                        {m.desc}
                      </p>
                      <ul className="space-y-2">
                        {m.detail.map((d) => (
                          <li key={d} className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-forest-light flex-shrink-0" />
                            <span className="text-xs text-white/50 tracking-wide">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

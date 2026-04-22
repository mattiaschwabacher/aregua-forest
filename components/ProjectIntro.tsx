import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "39", unit: "ha", label: "Superficie total" },
  { value: "560", unit: "", label: "Lotes disponibles" },
  { value: "360–630", unit: "m²", label: "Tamaño de lotes" },
  { value: "10+", unit: "", label: "Amenities exclusivos" },
];

export default function ProjectIntro() {
  return (
    <section id="proyecto" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-xs tracking-[0.4em] text-forest uppercase mb-4">
              El Proyecto
            </p>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-stone leading-tight mb-6">
              Una experiencia de{" "}
              <em className="not-italic text-forest">vida</em> sin igual
            </h2>
            <p className="text-stone/50 text-sm leading-relaxed mb-4">
              Areguá Forest no es solo un lugar para vivir, es una experiencia única.
              Imagina despertar cada mañana en un ambiente de serenidad y belleza,
              rodeado de entorno forestal, vistas abiertas y naturaleza exuberante.
            </p>
            <p className="text-stone/50 text-sm leading-relaxed mb-8">
              Comprar un lote en Areguá Forest es una oportunidad excepcional para quienes
              buscan un hogar donde cada detalle ha sido diseñado para el bienestar y la tranquilidad.
              Más que una inversión, es abrazar una forma de vida que combina lujo, naturaleza y
              comunidad vibrante.
            </p>
            <a
              href="#amenities"
              className="inline-flex items-center gap-3 text-xs tracking-widest text-forest uppercase border-b border-forest/30 pb-px hover:border-forest transition-colors"
            >
              Descubrir amenities
              <ArrowRight size={12} strokeWidth={1.5} />
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
                alt="Areguá Forest — propiedad de lujo rodeada de naturaleza"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle dark overlay for elegance */}
              <div className="absolute inset-0 bg-stone/10" />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/60 z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/60 z-10" />
            </div>
            {/* Offset accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/15 -z-10" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-8 py-10">
              <p className="font-heading text-4xl md:text-5xl font-light text-stone mb-1">
                {s.value}
                <span className="text-forest text-2xl ml-1">{s.unit}</span>
              </p>
              <p className="text-xs tracking-widest text-stone/40 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
